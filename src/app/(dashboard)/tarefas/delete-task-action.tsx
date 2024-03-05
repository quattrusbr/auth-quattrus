"use server";

import { Task } from "@/types/types";
import { revalidateTag } from "next/cache";

export async function deleteTaskAction(task: Task) {
  const jsonData = JSON.stringify({
    jsonData: [task],
  });
  await fetch(
    "http://localhost:45272/Servicos/cadTarefas.asmx/DeleteTarefas?idPK=&idReuniao=&abertas=false&concluidas=false&vencidas=false",
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
}
