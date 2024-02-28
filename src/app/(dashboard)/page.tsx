import { User } from "@prisma/client";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import HomeScreen from "./page.client";
import { ApiResponse } from "@/types/types";

async function getData() {
  const username = "d2afa6bcce854688e9067cc7c94f8acfb95a3df3";
  const password = "";

  const response = await fetch(
    "http://api-master.qualitin.local/api/KPI/hz01",
    {
      next: { revalidate: 60 },
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
        Host: "quant-aq.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    }
  );
  const json = await response.json();

  console.log("adas", json);

  return json;
}

export default async function Home() {
  const data: ApiResponse = await getData();
  const cookie = cookies().get("auth");

  if (!cookie) return notFound();

  let user: Omit<User, "password"> | null;
  const token: { payload: Omit<User, "password"> | null } = await jwtVerify(
    cookie.value,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );
  user = token.payload;

  return (
    <main className="overflow-x-hidden">
      <HomeScreen data={data.Kpis} />
    </main>
  );
}
