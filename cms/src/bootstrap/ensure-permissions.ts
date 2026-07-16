import type { Core } from "@strapi/strapi";

const PAGE_ACTIONS = ["find", "findOne"] as const;
const FORM_ACTIONS = ["create"] as const;

async function ensureRolePermissions(
  strapi: Core.Strapi,
  roleType: "public" | "authenticated",
  uid: string,
  actions: readonly string[],
) {
  const role = await strapi.db.query("plugin::users-permissions.role").findOne({
    where: { type: roleType },
  });

  if (!role) {
    strapi.log.warn(`[permissions] Role "${roleType}" not found`);
    return;
  }

  for (const action of actions) {
    const actionId = `${uid}.${action}`;
    const existing = await strapi.db.query("plugin::users-permissions.permission").findOne({
      where: {
        action: actionId,
        role: role.id,
      },
    });

    if (existing) continue;

    await strapi.db.query("plugin::users-permissions.permission").create({
      data: {
        action: actionId,
        role: role.id,
      },
    });
    strapi.log.info(`[permissions] Granted ${roleType}: ${actionId}`);
  }
}

export async function ensurePublicApiAccess(strapi: Core.Strapi) {
  await ensureRolePermissions(strapi, "public", "api::page.page", PAGE_ACTIONS);
  await ensureRolePermissions(
    strapi,
    "public",
    "api::form-submission.form-submission",
    FORM_ACTIONS,
  );
}
