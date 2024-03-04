"use client";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { usePathname } from "next/navigation";

export function BreadCrumb() {
  const pathName = usePathname();
  return (
    <div className="text-lg flex items-center">
      <KeyboardArrowLeftIcon className="text-primaryMain" />
      <span className="text-primaryMain mr-1">Dashboard</span> |
      <span className="ml-2">
        {pathName === "/projetos" ? "Projetos" : ""}
        {pathName === "/" ? "Cronograma" : ""}
        {pathName === "/tarefas" ? "Tarefas" : ""}
      </span>
    </div>
  );
}
