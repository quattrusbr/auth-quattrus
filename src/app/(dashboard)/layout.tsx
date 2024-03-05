import type { Metadata } from "next";
import Link from "next/link";
import { NavBarSide } from "../components/navbar/navbar-side";
import TopBar from "../components/navbarTop/navBarTop";
import { BreadCrumb } from "../components/navbarTop/bread-crumb";
import { HeaderText } from "./header-text";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar />
      <NavBarSide>
        <section className="px-7 flex gap-7 flex-col overflow-hidden w-full">
          <div className=" pt-6">
            {/* breadcrumb */}
            <BreadCrumb />
            {/* text */}
            <HeaderText />
          </div>
          {children}
        </section>
      </NavBarSide>
    </>
  );
}
