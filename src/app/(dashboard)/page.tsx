import { User } from "@prisma/client";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import HomeScreen from "./page.client";
import { ApiResponse } from "@/types/types";
import Link from "next/link";

function getData() {
  return [
    {
      id_kpi: 1491144,
      username: "hz01",
      name: "28 - Item 2A",
      metric: "Nº.",
      description: "",
      client: "A",
      good_when: "+",
      chronic_red: 3,
      priority: 28,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503044,
      username: "hz01",
      name: "Totalização 2A",
      metric: "Somar valores e faixas",
      description: "",
      client: "A",
      good_when: "+",
      chronic_red: 3,
      priority: 0.2,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503045,
      username: "hz01",
      name: "Totalização 2B de teste de vinculação de FCA",
      metric: "Somar valores e faixas",
      description: "",
      client: "",
      good_when: "+",
      chronic_red: 3,
      priority: 1,
      decimal_places: 4,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2B",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503946,
      username: "hz01",
      name: "Totalização 2B",
      metric: "Somar valores e faixas(média do denominador)",
      description: "",
      client: "",
      good_when: "+",
      chronic_red: 4,
      priority: 0.4,
      decimal_places: 1,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2B",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1500206,
      username: "hz01",
      name: "02 - Item 1C + Auxiliar",
      metric: "Nº.",
      description: "",
      client: "A",
      good_when: "+",
      chronic_red: 2,
      priority: 2,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503018,
      username: "hz01",
      name: "Económicos Ahorro",
      metric: "$",
      description: "",
      client: "E",
      good_when: "-",
      chronic_red: 3,
      priority: null,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503019,
      username: "hz01",
      name: "Económicos Ingreso",
      metric: "$",
      description: "",
      client: "E",
      good_when: "+",
      chronic_red: 3,
      priority: null,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503020,
      username: "hz01",
      name: "No Económicos",
      metric: "%",
      description: "",
      client: "E",
      good_when: "+",
      chronic_red: 3,
      priority: null,
      decimal_places: 2,
      coefficient: 0,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "0,1800000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1514972,
      username: "hz01",
      name: "Totalização por média 1C",
      metric: "Média valores e faixas",
      description: "<br>",
      client: "C",
      good_when: "+",
      chronic_red: 3,
      priority: 0.1,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503021,
      username: "hz01",
      name: "Entregables",
      metric: "Nº",
      description: "",
      client: "E",
      good_when: "+",
      chronic_red: 3,
      priority: null,
      decimal_places: 2,
      coefficient: 0,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "0,3000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503022,
      username: "hz01",
      name: "Presupuesto",
      metric: "%",
      description: "",
      client: "E",
      good_when: "+",
      chronic_red: 3,
      priority: null,
      decimal_places: 2,
      coefficient: 0,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "0,1000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503023,
      username: "hz01",
      name: "Económicos",
      metric: "$",
      description: "",
      client: "E",
      good_when: "+",
      chronic_red: 3,
      priority: null,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1504245,
      username: "hz01",
      name: "30 - Item Compartilhamento",
      metric: "$",
      description: "",
      client: "C",
      good_when: "+",
      chronic_red: 3,
      priority: 30,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503043,
      username: "hz01",
      name: "Totalização 1C",
      metric: "Somar valores e faixas -",
      description:
        "duaosduaosduaosduaosduaoduaoduduaosduaosduaosduaosduaoduaoduduaosduaosduaosduaosduaoduaodu<div>duaosduaosduaosduaosduaoduaoduduaosduaosduaosduaosduaoduaoduduaosduaosduaosduaosduaoduaodu<br></div><div>duaosduaosduaosduaosduaoduaoduduaosduaosduaosduaosduaoduaoduduaosduaosduaosduaosduaoduaodu<br></div><div>duaosduaosduaosduaosduaoduaoduduaosduaosduaosduaosduaoduaoduduaosduaosduaosduaosduaoduaodu<br></div><div>duaosduaosduaosduaosduaoduaoduduaosduaosduaosduaosduaoduaoduduaosduaosduaosduaosduaoduaodu<br></div>",
      client: "",
      good_when: "+",
      chronic_red: 3,
      priority: 0.3,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1503017,
      username: "hz01",
      name: "WhatsApp",
      metric: "%",
      description: "",
      client: "E",
      good_when: "+",
      chronic_red: 3,
      priority: 29,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1500205,
      username: "hz01",
      name: "01 - Item 1C + ",
      metric: "Nº. 1234",
      description: "<br>",
      client: "A",
      good_when: "+",
      chronic_red: 2,
      priority: 1,
      decimal_places: 4,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1513284,
      username: "hz01",
      name: "34 - Item 1C +",
      metric: "",
      description: "",
      client: "C",
      good_when: "+",
      chronic_red: 3,
      priority: 34,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315057,
      username: "hz01",
      name: "12 - item 2A =",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "=",
      chronic_red: 3,
      priority: 12,
      decimal_places: 0,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315047,
      username: "hz01",
      name: "05 - Item 1C =",
      metric: "Nº",
      description: "descrição",
      client: "A",
      good_when: "=",
      chronic_red: 3,
      priority: 5,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315045,
      username: "hz01",
      name: "03 - Item 1C -",
      metric: "Nº - ",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 4,
      decimal_places: 1,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315044,
      username: "hz01",
      name: "02 - Item 1C +",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "+",
      chronic_red: 1,
      priority: 2,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1562406,
      username: "hz01",
      name: "Totalização 2A",
      metric: "Somar valores",
      description: "",
      client: "A",
      good_when: "+",
      chronic_red: 3,
      priority: 0.2,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315055,
      username: "hz01",
      name: "11 - item 2A =",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "=",
      chronic_red: 3,
      priority: 11,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315058,
      username: "hz01",
      name: "13 - Item 2B +",
      metric: "%",
      description: "",
      client: "A",
      good_when: "+",
      chronic_red: 3,
      priority: 13,
      decimal_places: 1,
      coefficient: 100,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2B",
      quotient: "100,0000000000",
      numerator: "Num",
      denominator: "Den",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1508029,
      username: "hz01",
      name: "Totalização 1C - Somar Valores",
      metric: "Nº ",
      description: "",
      client: "E",
      good_when: "+",
      chronic_red: 3,
      priority: 5,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1491142,
      username: "hz01",
      name: "27 - Item 2A",
      metric: "",
      description: "",
      client: "",
      good_when: "+",
      chronic_red: 3,
      priority: 27,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1507519,
      username: "hz01",
      name: "Contar amarelo e vermelhos",
      metric: "R$",
      description: "",
      client: "",
      good_when: "-",
      chronic_red: 3,
      priority: null,
      decimal_places: 1,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315059,
      username: "hz01",
      name: "14 - Item 2B +",
      metric: "% - media denominador",
      description: "",
      client: "A",
      good_when: "+",
      chronic_red: 3,
      priority: 14,
      decimal_places: 1,
      coefficient: 100,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2B",
      quotient: "100,0000000000",
      numerator: "Numerado",
      denominator: "Denomi...",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315060,
      username: "hz01",
      name: "15 - Item 2B - ",
      metric: "%",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 15,
      decimal_places: 3,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2B",
      quotient: "1,0000000000",
      numerator: "Numerado",
      denominator: "Denomi...",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315061,
      username: "hz01",
      name: "16 - Item 2B -",
      metric: "%",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 16,
      decimal_places: 2,
      coefficient: 100,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2B",
      quotient: "100,0000000000",
      numerator: "Numerado",
      denominator: "Denomi...",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315062,
      username: "hz01",
      name: "17 - Item 2B =",
      metric: "%",
      description: "",
      client: "A",
      good_when: "=",
      chronic_red: 3,
      priority: 17,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2B",
      quotient: "1,0000000000",
      numerator: "Numerado",
      denominator: "Denomi...",
      denominator_average: 1,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315063,
      username: "hz01",
      name: "18 - Item 2B =",
      metric: "%",
      description: "",
      client: "A",
      good_when: "=",
      chronic_red: 3,
      priority: 18,
      decimal_places: 2,
      coefficient: 100,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2B",
      quotient: "100,0000000000",
      numerator: "Numerado",
      denominator: "Denomi...",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315053,
      username: "hz01",
      name: "10 - item 2A -",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 10,
      decimal_places: 0,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315050,
      username: "hz01",
      name: "08 - item 2A +",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "+",
      chronic_red: 3,
      priority: 8,
      decimal_places: 1,
      coefficient: 0,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "0,0000010000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315064,
      username: "hz01",
      name: "19 - Item 2C +",
      metric: "Nº",
      description:
        '<strong style="margin: 0px; padding: 0px; font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify;">Lorem Ipsum</strong><span style="font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; text-align: justify;">&nbsp;é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</span>',
      client: "A",
      good_when: "+",
      chronic_red: 3,
      priority: 19,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315065,
      username: "hz01",
      name: "20 - Item 2C +",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "+",
      chronic_red: 3,
      priority: 20,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315066,
      username: "hz01",
      name: "21 - Item 2C -",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 21,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315067,
      username: "hz01",
      name: "22 - Item 2C -",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 22,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315068,
      username: "hz01",
      name: "23 - Item 2C =",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "=",
      chronic_red: 3,
      priority: 23,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315069,
      username: "hz01",
      name: "24 - Item 2C =",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "=",
      chronic_red: 3,
      priority: 24,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315043,
      username: "hz01",
      name: "01 - Item 1C + Auxiliar",
      metric: "Nº.",
      description: "",
      client: "A",
      good_when: "+",
      chronic_red: 3,
      priority: 0,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315046,
      username: "hz01",
      name: "04 - Item 1C -",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 4,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315048,
      username: "hz01",
      name: "06 - Item 1C =",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "=",
      chronic_red: 3,
      priority: 6,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315049,
      username: "hz01",
      name: "07 - item 2A +",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 7,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315051,
      username: "hz01",
      name: "09 - item 2A -",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 9,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315052,
      username: "hz01",
      name: "09 - item 2A - Auxiliar",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 9,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315054,
      username: "hz01",
      name: "10 - item 2A - Auxiliar",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "-",
      chronic_red: 3,
      priority: 10,
      decimal_places: 0,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1315056,
      username: "hz01",
      name: "11 - item 2A = Auxiliar",
      metric: "Nº",
      description: "",
      client: "A",
      good_when: "=",
      chronic_red: 3,
      priority: 11,
      decimal_places: 2,
      coefficient: 1,
      secondary: 1,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "2A",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1510836,
      username: "hz01",
      name: "Totalização IC - Media de Valores",
      metric: "123",
      description: "https://quattrus.com/index.aspx?tipo=USR<div><br></div>",
      client: "C",
      good_when: "+",
      chronic_red: 4,
      priority: 2,
      decimal_places: 4,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1670583,
      username: "hz01",
      name: "123",
      metric: "",
      description: "",
      client: "",
      good_when: "+",
      chronic_red: 3,
      priority: null,
      decimal_places: 3,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1508536,
      username: "hz01",
      name: "33 - Item 1C +",
      metric: "Totalização por média",
      description: "",
      client: "C",
      good_when: "+",
      chronic_red: 3,
      priority: 33,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1508535,
      username: "hz01",
      name: "32 - Item 1C +",
      metric: "Totalização por média",
      description: "",
      client: "C",
      good_when: "+",
      chronic_red: 3,
      priority: 32,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1508533,
      username: "hz01",
      name: "31 - Item 1C + ",
      metric: "Totalização por media",
      description: "",
      client: "C",
      good_when: "+",
      chronic_red: 3,
      priority: 31,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1685212,
      username: "hz01",
      name: "Item ABC",
      metric: "123",
      description:
        "1231111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
      client: "",
      good_when: "+",
      chronic_red: 3,
      priority: null,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1684792,
      username: "hz01",
      name: "Item 01",
      metric: "",
      description: "",
      client: "",
      good_when: "+",
      chronic_red: 3,
      priority: null,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1419663,
      username: "hz01",
      name: "26 - Item 1C",
      metric: "",
      description: "",
      client: "",
      good_when: "+",
      chronic_red: 3,
      priority: 26,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
    {
      id_kpi: 1419662,
      username: "hz01",
      name: "25 - Item 1C",
      metric: "",
      description: "",
      client: "",
      good_when: "+",
      chronic_red: 3,
      priority: 25,
      decimal_places: 2,
      coefficient: 1,
      secondary: 0,
      deleted: 0,
      benchmark_name: "",
      benchmark_value: null,
      type: "1C",
      quotient: "1,0000000000",
      numerator: "",
      denominator: "",
      denominator_average: 0,
      calendar: "",
      KPIToleranceRange: null,
    },
  ];
}

export default async function Home() {
  const data = getData();
  const cookie = cookies().get("auth");

  if (!cookie) return notFound();

  let user: Omit<User, "password"> | null;
  const token: { payload: Omit<User, "password"> | null } = await jwtVerify(
    cookie.value,
    new TextEncoder().encode(process.env.JWT_SECRET)
  );
  user = token.payload;

  return (
    <>
      
      <main className="overflow-x-hidden">
        <HomeScreen data={data} />
      </main>
    </>
  );
}
