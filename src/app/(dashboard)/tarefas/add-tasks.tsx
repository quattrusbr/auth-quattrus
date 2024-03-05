"use client";

import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
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
import { SubmitHandler, useForm } from "react-hook-form";

// Definindo um tipo para os itens de dados
type TasksData = {
  id_task: number;
  prioridade_task: string;
  oque_task: string;
  porque_task: string;
  como_task: string;
  quem_task: string;
  data_inicial: string;
  data_final: string;
  valor_task: string;
  status: boolean;
};

type TasksProps = {
  tasks: TasksData[];
};

const names = [
  { value: "Carol" },
  { value: "Ismael" },
  { value: "Mano" },
  { value: "Yan" },
];

export const AddTasks = ({ tasks }: TasksProps) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  const onSubmit = (data: TasksData) => {
    const newTask: TasksData = {
      ...data,
      id_task: tasks.length + 1,
      status: false,
    };

    const updatedTasks = [...tasks, newTask];
    reset();
    toggleDrawer();
  };

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
              <TableCell>PR</TableCell>
              <TableCell>O que</TableCell>
              <TableCell align="right">Prioridade</TableCell>
              <TableCell align="right">Por quê?</TableCell>
              <TableCell align="right">Como/Onde</TableCell>
              <TableCell align="right">Quem</TableCell>
              <TableCell align="right">Data inicial</TableCell>
              <TableCell align="right">Data Final</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((row) => (
              <TableRow
                key={row.id_task}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.id_task}</TableCell>
                <TableCell align="right">{row.prioridade_task}</TableCell>
                <TableCell align="right">{row.oque_task}</TableCell>
                <TableCell align="right">{row.porque_task}</TableCell>
                <TableCell align="right">{row.como_task}</TableCell>
                <TableCell align="right">{row.quem_task}</TableCell>
                <TableCell align="right">{row.data_inicial}</TableCell>
                <TableCell align="right">{row.data_final}</TableCell>
                <TableCell align="right">{row.valor_task}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
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
          <form className="mx-[40px] mt-5" onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <label id="prioridade_task">Prioridade</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="prioridade_task"
                variant="filled"
                type="number"
                {...register("prioridade_task")}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <label id="oque_task">O que</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="oque_task"
                variant="filled"
                multiline
                {...register("oque_task")}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <label id="porque_task">Por quê?</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="porque_task"
                variant="filled"
                multiline
                {...register("porque_task")}
              />
              <label id="como_task">Como/Onde</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="como_task"
                variant="filled"
                multiline
                {...register("como_task")}
              />
              <label id="quem_task">Quem</label>
              <Select
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="quem_task"
                variant="filled"
                {...register("quem_task")}
              >
                {names.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              className="bg-mercuryGray px-3 py-2 rounded-lg"
              type="button"
              onClick={toggleDrawer}
            >
              Cancelar
            </Button>
            <Button
              className="bg-primaryMain px-3 py-2 rounded-lg"
              type="submit"
            >
              Salvar
            </Button>
          </form>
        </Box>
      </Drawer>
    </>
  );
};
