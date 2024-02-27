import prisma from "@/lib/prisma";
import { createUserFormSchema } from "@/lib/schemas";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import * as jose from "jose";
import * as bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = createUserFormSchema.parse(await req.json());
    const { username, company } = createUserFormSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: {
        username,
        company,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }
    //token
    const match = await bcrypt.compare(body.password, user?.password);

    if (!match) {
      return NextResponse.json(
        { message: "Invalid password." },
        { status: 401 }
      );
    }

    console.log("As senhas correspondem.");

    const { password, ...userWithoutPassword } = user;

    const token = await new jose.SignJWT(userWithoutPassword)
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    //set cookie as token
    cookies().set({
      name: "auth",
      value: token,
      httpOnly: true,
      path: "/",
    });
    return NextResponse.json({ user }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "An error occurred." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
