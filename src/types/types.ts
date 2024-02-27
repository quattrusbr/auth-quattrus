export type Kpis = {
  id_kpi: number;
  username: string;
  name: string;
  metric: string;
  description: string;
  client: string;
  good_when: string;
  chronic_red: number;
  priority: number;
  decimal_places: number;
  coefficient: number;
  secondary: number;
  deleted: number;
  benchmark_name: string;
  benchmark_value: null;
  type: string;
  quotient: string;
  numerator: string;
  denominator: string;
  denominator_average: number;
  calendar: string;
  KPIToleranceRange: null;
};

export type ApiResponse = {
  message: string;
  success: boolean;
  Kpis: Kpis[];
};
