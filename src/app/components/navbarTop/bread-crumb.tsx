"use client";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { usePathname } from "next/navigation";

export function BreadCrumb() {
  const pathName = usePathname();
  return (
    <div className="text-lg flex items-center">
      <KeyboardArrowLeftIcon 
      //@ts-ignore
      fontSize="12px" 
      className="text-primaryMain" />
      <p className="text-primaryMain text-xs font-semibold">Dashboard</p>
      <p className="ml-2 text-xs font-semibold">|</p>
      <p className="ml-2 text-xs font-semibold">
        {pathName === "/projetos" ? "Projetos" : ""}
        {pathName === "/" ? "Cronograma" : ""}
        {pathName === "/tarefas" ? "Tarefas" : ""}
      </p>
    </div>
  );
}
