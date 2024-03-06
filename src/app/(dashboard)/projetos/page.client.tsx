"use client";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { usePagination } from "./../../../hooks/usePagination";

// Definindo um tipo para os itens de dados
type ProjectData = {
  id_projeto: number;
  identificador_etapa: string;
  nome_projeto: string;
  data_etapa: string;
  data_conclusao: string;
};

type Props = {
  data: any[];
};

export function ProjetosScreen({ data }: Props) {
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    usePagination();

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="tabela de projetos paginada">
          <TableHead>
            <TableRow>
              <TableCell>Nome do Projeto</TableCell>
              <TableCell align="right">ID do Projeto</TableCell>
              <TableCell align="right">Identificador da Etapa</TableCell>
              <TableCell align="right">Data da Etapa</TableCell>
              <TableCell align="right">Data de Conclusão</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id_projeto + row.identificador_etapa}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.nome_projeto}
                  </TableCell>
                  <TableCell align="right">{row.id_projeto}</TableCell>
                  <TableCell align="right">{row.identificador_etapa}</TableCell>
                  <TableCell align="right">{row.data_etapa}</TableCell>
                  <TableCell align="right">{row.data_conclusao}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        labelRowsPerPage="Linhas por página:"
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
