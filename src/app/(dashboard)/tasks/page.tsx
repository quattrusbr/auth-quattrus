async function getData() {
  const username = "d2afa6bcce854688e9067cc7c94f8acfb95a3df3";
  const password = "";
  const data = await fetch(
    "http://localhost:45272/Servicos/cadTarefas.asmx/GetTarefas?idPK=&idReuniao=&abertas=true&concluidas=false&vencidas=true&page=1&start=0&limit=25",
    {
      next: { revalidate: 60 },
      method: "GET",
      headers: {
        Authorization: "Basic " + btoa(username + ":" + password),
        Host: "quant-aq.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "no-cors",
    }
  );

  return await data.json();
}

export default async function Tasks() {
  const data = await getData();
  return (
    <div>
      {JSON.stringify(data)}
      <div className="bg-[#F5F5F5] px-3 py-4">
        <h1 className="font-medium">Tarefas adicionadas | 1</h1>
      </div>
    </div>
  );
}