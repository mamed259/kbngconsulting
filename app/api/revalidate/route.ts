import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import {
  CMS_CACHE_TAG,
  parseCmsWebhookPayload,
  pathsForCmsEvent,
} from "@/lib/cms-revalidate";

function parsePathsFromQuery(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("paths");
  if (!raw) return [];
  return raw
    .split(",")
    .map((path) => path.trim())
    .filter((path) => path.startsWith("/"));
}

export async function POST(request: NextRequest) {
  const expectedSecret = process.env.NEXT_REVALIDATE_SECRET;
  if (!expectedSecret) {
    return NextResponse.json(
      { revalidated: false, message: "NEXT_REVALIDATE_SECRET is not configured" },
      { status: 500 },
    );
  }

  const secretFromQuery = request.nextUrl.searchParams.get("secret");
  const secretFromHeader = request.headers.get("x-revalidate-secret");
  const providedSecret = secretFromQuery || secretFromHeader;

  if (providedSecret !== expectedSecret) {
    return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
  }

  let body: unknown = null;
  try {
    body = await request.json();
  } catch {
    body = null;
  }

  const parsed = parseCmsWebhookPayload(body);
  const queryPaths = parsePathsFromQuery(request);
  const paths = pathsForCmsEvent({
    model: parsed.model,
    slug: parsed.slug,
    extraPaths: [...parsed.extraPaths, ...queryPaths],
  });

  revalidateTag(CMS_CACHE_TAG, { expire: 0 });
  revalidatePath("/", "layout");
  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({
    revalidated: true,
    tag: CMS_CACHE_TAG,
    paths,
    at: new Date().toISOString(),
  });
}
