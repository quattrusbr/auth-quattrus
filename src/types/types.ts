export type Kpis = {
  id_kpi: number;
  username: string;
  name: string;
  metric: string;
  description: string;
  client: string;
  good_when: string;
  chronic_red: number;
  priority?: number | null;
  decimal_places: number;
  coefficient: number;
  secondary: number;
  deleted: number;
  benchmark_name: string;
  benchmark_value: number | null;
  type: string;
  quotient: string;
  numerator: string;
  denominator: string;
  denominator_average: number;
  calendar: string;
  KPIToleranceRange: number | null;
};

export type ApiResponse = {
  message: string;
  success: boolean;
  Kpis: Kpis[];
};

export type Task = {
  __type: "cadTarefas+cadastroTarefas";
  idTarefa: number;
  oque: string;
  porque: string;
  prioridade: number;
  comoOnde: string;
  dt_de:  string;
  dt_ate:  string;
  concluido: number;
  dtConcluido: string;
  valor: number;
  idUsuario: number;
  nomeUsuario: string;
  idUsuarioQuem: number;
  nomeUsuarioQuem: string;
  status: "A";
  comentario: null | string;
  atrasado: boolean;
  idReuniao: null | number;
  avatar: string;
};
