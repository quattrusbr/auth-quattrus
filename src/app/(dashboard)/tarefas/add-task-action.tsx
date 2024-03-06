"use server";
import { revalidateTag } from "next/cache";
import { IFormInputs } from "./add-tasks";

export async function createTaskAction(task: IFormInputs) {
  const jsonData = JSON.stringify({
    jsonData: [
      { ...task, concluido: task.concluido ? 1 : 0, dt_concluido: null },
    ],
  });

  console.log("teste", jsonData);
  const data = await fetch(
    "http://localhost:45272/Servicos/cadTarefas.asmx/CreateTarefas?idPK=&idReuniao=&abertas=false&concluidas=false&vencidas=false",
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
  const json = await data.json();
  console.log("asdasd", json);

  return json;
}