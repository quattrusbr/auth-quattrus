"use client";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { usePathname } from "next/navigation";

export function BreadCrumb() {
  const pathName = usePathname();
  console.log("asdas", pathName);
  return (
    <div className="text-lg flex items-center">
      <KeyboardArrowLeftIcon className="text-aquamarine" />
      <span className="text-aquamarine mr-1">Dashboard</span> |
      <span className="ml-2">
        {pathName === "/projetos" ? "Projetos" : "Cronograma"}
      </span>
    </div>
  );
}
