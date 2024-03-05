"use client";
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {} from "@mui/x-date-pickers/DatePicker";
import {
  Box,
  Divider,
  Drawer,
  FormControl,
  IconButton,
  MenuItem,
  Select,
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
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// Definindo um tipo para os itens de dados
type TasksData = {
  prioridade_task?: string;
  oque_task: string;
  porque_task: string;
  como_task: string;
  quem_task: string;
  data_inicial?: string;
  data_final?: string;
  valor_task?: string;
};

import { Task } from "@/types/types";
import { Button } from "@/app/components/button";
import { DeleteButtonRow } from "./delete-button-row";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const names = [
  { value: "Carol" },
  { value: "Ismael" },
  { value: "Mano" },
  { value: "Yan" },
];

export const AddTasks = ({ tasks }: { tasks: Task[] }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  interface IFormInputs {
    prioridade_task?: string;
    oque_task: string;
    porque_task: string;
    como_task: string;
    quem_task: string;
    data_inicial?: string;
    data_final?: string;
    valor_task?: string;
  }

  const { handleSubmit, control, reset, register } = useForm<IFormInputs>({
    defaultValues: {
      oque_task: "",
      porque_task: "",
      como_task: "",
      quem_task: "",
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
    console.log(dayjs(data.data_inicial).format("DD/MM/YYYY")); //formatar datas dessa forma para enviar para o backend
  };

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
              <TableCell align="right">Quem</TableCell>
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
          <form
            className="mx-[40px] mt-5 flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
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

            <Controller
              control={control}
              name="data_inicial"
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                    format="YYYY-MM-DD"
                    label={"data inicial"}
                  />
                </LocalizationProvider>
              )}
            />
            <Controller
              control={control}
              name="data_final"
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={field.value}
                    onChange={(value) => {
                      field.onChange(value);
                    }}
                    format="YYYY-MM-DD"
                    label={"data final"}
                  />
                </LocalizationProvider>
              )}
            />
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
            <div className="flex">
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
            </div>
          </form>
        </Box>
      </Drawer>
    </>
  );
};
