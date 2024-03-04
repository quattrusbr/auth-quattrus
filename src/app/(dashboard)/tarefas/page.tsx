import { AddTasks } from "./add-tasks";

function getTasksData() {
  // const username = "d2afa6bcce854688e9067cc7c94f8acfb95a3df3";
  // const password = "";
  // const data = await fetch(
  //   "http://localhost:45272/Servicos/cadTarefas.asmx/GetTarefas?idPK=&idReuniao=&abertas=true&concluidas=false&vencidas=true&page=1&start=0&limit=25",
  //   {
  //     next: { revalidate: 60 },
  //     method: "GET",
  //     headers: {
  //       Authorization: "Basic " + btoa(username + ":" + password),
  //       Host: "quant-aq.com",
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     mode: "no-cors",
  //   }
  // );

  return [];
}

export default async function Tarefas() {
  const tasks = getTasksData();

  return (
    <div>
      <AddTasks tasks={tasks}></AddTasks>
    </div>
  );
}
