"use client";

import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Task } from "@/types/types";
import { deleteTaskAction } from "./delete-task-action";
import { Button } from "@/app/components/button";
import { DeleteButtonRow } from "./delete-button-row";
const names = [
  {
    value: "Carol",
  },
  {
    value: "Ismael",
  },
  {
    value: "Mano",
  },
  {
    value: "Yan",
  },
];

export const AddTasks = ({ tasks }: { tasks: Task[] }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  function dataAteFormatada(data: string) {
    const dataAte = new Date(data);

    return dataAte.toLocaleString();
  }

  function dataDeFormatada(data: string) {
    const dataDe = new Date(data);

    return dataDe.toLocaleDateString();
  }

  return (
    <>
      <div className="bg-mercuryGray px-3 py-2 flex justify-between">
        <h1 className="font-medium">Tarefas adicionadas | 1</h1>
        <div>
          <button>
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <button className="ml-4">
            <FontAwesomeIcon icon={faPlus} onClick={toggleDrawer} />
          </button>
        </div>
      </div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="tabela de projetos paginada">
          <TableHead>
            <TableRow>
              <TableCell align="right">PR</TableCell>
              <TableCell align="right">O que</TableCell>
              <TableCell align="right">Por quê?</TableCell>
              <TableCell align="right">Como/Onde</TableCell>
              <TableCell align="right">Data inicial</TableCell>
              <TableCell align="right">Data Final</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((row: Task) => (
              <TableRow
                key={row.idTarefa}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.prioridade}</TableCell>
                <TableCell align="right">{row.oque}</TableCell>
                <TableCell align="right">{row.porque}</TableCell>
                <TableCell align="right">{row.comoOnde}</TableCell>
                <TableCell align="right">
                  {dataDeFormatada(row.dt_de)}
                </TableCell>
                <TableCell align="right">
                  {dataAteFormatada(row.dt_ate)}
                </TableCell>
                <TableCell align="right">{row.valor}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <DeleteButtonRow row={row} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
        <div style={{ marginLeft: "auto" }}>
          <IconButton
            sx={{ mr: 0 }}
            onClick={toggleDrawer}
            size="large"
            edge="end"
            color="inherit"
            aria-label="close"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        <Toolbar
          variant="dense"
          sx={{
            px: 0,
            mx: "16px",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <Typography variant="body1" fontWeight={"bold"} component="div">
            Adicionar tarefas
          </Typography>
        </Toolbar>
        <Divider variant="middle" sx={{ mx: "40px" }} />

        <Box sx={{ width: 550 }}>
          <form className="mx-[40px] mt-5">
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <label id="prioridade">Prioridade</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="prioridade"
                variant="filled"
                type="number"
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <label id="oque">O que</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="oque"
                variant="filled"
                multiline={true}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <label id="porque">Por quê?</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="porque"
                variant="filled"
                multiline={true}
              />
              <label id="como">Como/Onde</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="como"
                variant="filled"
                multiline={true}
              />
              <label id="Quem">Quem</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="quem"
                select
                variant="filled"
              >
                {names.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </TextField>
            </FormControl>
            <button
              className="bg-mercuryGray px-3 py-2 rounded-lg"
              type="submit"
              onClick={toggleDrawer}
            >
              Cancelar
            </button>
            <button
              className="bg-primaryMain px-3 py-2 rounded-lg"
              type="submit"
              onClick={toggleDrawer}
            >
              Salvar
            </button>
          </form>
        </Box>
      </Drawer>
    </>
  );
};
