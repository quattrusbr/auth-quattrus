import { AddTasks } from "./page.client";

async function getTasksData() {
  const data = await fetch(
    "http://localhost:45272/Servicos/cadTarefas.asmx/GetTarefas?idPK=1430&idReuniao=&abertas=true&concluidas=false&vencidas=true&page=1&start=0&limit=25",
    {
      next: { revalidate: 60, tags: ["validateTasks"] },
      method: "GET",
      headers: {
        "ASP.NET_SessionId": process.env.TOKEN!,
        "Content-Type": "application/json",
      },
    }
  );

  const json = await data.json();

  return json;
}


export default async function Tarefas() {
  const tasks = await getTasksData();

  return (
    <div>
      <AddTasks tasks={tasks.d.data} />
    </div>
  );
}
