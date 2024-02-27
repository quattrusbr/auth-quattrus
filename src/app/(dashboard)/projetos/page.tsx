import { ProjetosScreen } from "./page.client";

async function getData() {
  const data = await fetch(
    "http://localhost:50129/cronograma/GETETAPASCRONOGRAMAMENSAL?paa=1887&prioridadeInferior=&prioridadeSuperior=&metaInferior=undefined&metaSuperior=undefined&statusCronograma=&statusCusto=&tipoProjeto=&liderProjeto=&impactoResultado=&categoriaNextel=&classifIniciativaNextel=&impactoIniciativaNextel=&contabilInferiorFiltroProjetos=&contabilSuperiorFiltroProjetos=&caixaInferiorFiltroProjetos=&caixaSuperiorFiltroProjetos=&_dc=1708696060950",
    { next: { revalidate: 60 } }
  );

  return await data.json();
}

export default async function Projetos() {
  const data = await getData();
  return (
    <div>
      <ProjetosScreen data={data} />
    </div>
  );
}
