import { NextResponse } from "next/server";
import { serialize } from "cookie";

if (!process.env.PASSWORD) {
  throw new Error("Environment variable PASSWORD is not set.");
}
export async function POST(req: Request) {
  const { password } = await req.json();
  if (password === process.env.PASSWORD) {
    const cookie = serialize("auth", "true", { path: "/", httpOnly: true });
    return NextResponse.json(
      { message: "Access granted" },
      {
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
  } else {
    return NextResponse.json({ message: "Invalid password" }, { status: 401 });
  }
}
