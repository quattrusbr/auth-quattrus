"use client";
import { Build, Task } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function HeaderText() {
  const pathName = usePathname();

  return (
    <section className="flex flex-col gap-1 mt-7">
      <div className="flex flex-row">
        <span>
          {pathName === "/projetos" ? <Build /> : ""}
          {pathName === "/" ? (
            <CalendarMonthIcon className="text-primaryMain" />
          ) : (
            ""
          )}
          {pathName === "/tarefas" ? (
            <FontAwesomeIcon icon={faLayerGroup} className="text-primaryMain" />
          ) : (
            ""
          )}
        </span>
        <h1 className="text-lg ml-2 font-light text-steelGray">
          {pathName === "/projetos" ? "PROJETOS" : ""}
          {pathName === "/" ? "CRONOGRAMA" : ""}
          {pathName === "/tarefas" ? "TAREFAS" : ""}
        </h1>
      </div>
      <div>
        <hr className="bg-mercuryGray h-[1px] my-2 opacity-30" />
        <p>
        {pathName === "/projetos" ? "Aqui você pode acompanhar os resultados dos seus projetos." : ""}
          {pathName === "/" ? "Acompanhe aqui o cronograma dos seus projetos." : ""}
          {pathName === "/tarefas" ? "Aqui você pode acompanhar todas as tarefas que foram criadas, adicionar novas ou concluí-las cliando em status." : ""}        
          <Link className="text-aquamarine font-bold ml-1" href="/saiba-mais">
            Saiba mais
          </Link>
        </p>
      </div>
    </section>
  );
}
