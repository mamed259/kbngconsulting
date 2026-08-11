import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

function parsePathsFromQuery(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("paths");
  if (!raw) return [];
  return raw
    .split(",")
    .map((path) => path.trim())
    .filter((path) => path.startsWith("/"));
}

function parsePathsFromBody(body: unknown) {
  if (!body || typeof body !== "object") return [];
  const value = (body as { paths?: unknown }).paths;
  if (!Array.isArray(value)) return [];
  return value
    .filter((path): path is string => typeof path === "string")
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

  let bodyPaths: string[] = [];
  try {
    const body = (await request.json()) as unknown;
    bodyPaths = parsePathsFromBody(body);
  } catch {
    bodyPaths = [];
  }

  const queryPaths = parsePathsFromQuery(request);
  const mergedPaths = Array.from(new Set([...queryPaths, ...bodyPaths]));
  const paths = mergedPaths.length ? mergedPaths : ["/blog"];

  for (const path of paths) {
    revalidatePath(path);
  }

  return NextResponse.json({
    revalidated: true,
    paths,
    at: new Date().toISOString(),
  });
}
