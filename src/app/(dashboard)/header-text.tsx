"use client";
import { Build, Task } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { usePathname } from "next/navigation";

export function HeaderText() {
  const pathName = usePathname();

  return (
    <div className="flex gap-1 mt-7">
      <span>
        {pathName === "/projetos" ? <Build /> : ""}
        {pathName === "/" ? (
          <CalendarMonthIcon className="text-aquamarine" />
        ) : (
          ""
        )}
        {pathName === "/tasks" ? <Task /> : ""}
      </span>
      <h1 className="text-lg font-light text-steelGray">
        {pathName === "/projetos" ? "Projetos" : ""}
        {pathName === "/" ? "Cronograma" : ""}
        {pathName === "/tasks" ? "Tasks" : ""}
      </h1>
    </div>
  );
}
