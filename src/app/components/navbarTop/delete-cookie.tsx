"use server";

import { cookies } from "next/headers";

export async function DeleteCookies() {
  cookies().delete("auth");
}
