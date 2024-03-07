"use server";
import { revalidateTag } from "next/cache";
import { IFormInputs } from "./page.client";

export async function createTaskAction(task: IFormInputs) {
  const jsonData = JSON.stringify({
    jsonData: [
      { ...task, concluido: task.concluido ? 1 : 0, dt_concluido: null },
    ],
  });

  const data = await fetch(
    "http://localhost:45272/Servicos/cadTarefas.asmx/CreateTarefas?idPK=&idReuniao=&abertas=true&concluidas=false&vencidas=true",
    {
      method: "POST",
      headers: {
        "ASP.NET_SessionId": process.env.TOKEN!,
        "Content-Type": "application/json",
      },
      body: jsonData,
    }
  );

  revalidateTag("validateTasks");

  return await data.json();
}
