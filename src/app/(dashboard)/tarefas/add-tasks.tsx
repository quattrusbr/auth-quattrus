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

import { Task } from "@/types/types";
import { Button } from "@/app/components/button";
import { DeleteButtonRow } from "./delete-button-row";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const names = [{ value: 1430 }];

interface IFormInputs {
  prioridade: string;
  oque: string;
  porque: string;
  comoOnde: string;
  idUsuarioQuem: number;
  dt_de: string;
  dt_ate: string;
  valor: number;
  concluido: number;
}

export const AddTasks = ({ tasks }: { tasks: Task[] }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { handleSubmit, control, reset, register } = useForm<IFormInputs>({
    defaultValues: {
      prioridade: "",
      oque: "",
      porque: "",
      comoOnde: "",
      idUsuarioQuem: 0,
      dt_de: "",
      dt_ate: "",
      valor: 0,
      concluido: 0,
    },
  });

  // const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
  //   try {
  //     data.dt_de = dayjs(data.dt_de).format("DD/MM/YYYY");
  //     data.dt_ate = dayjs(data.dt_ate).format("DD/MM/YYYY");
  //     console.log(data);
  //     console.log( JSON.stringify({ jsonData: [{ data }] }));

  //     const response = await fetch(
  //       "http://localhost:45272/Servicos/cadTarefas.asmx/CreateTarefas?idPK=&idReuniao=&abertas=true&concluidas=false&vencidas=tru",
  //       {
  //         method: "POST",
  //         mode: "no-cors",
  //         headers: {
  //           "ASP.NET_SessionId": "i2fwmyjidh5wbviihis11yti",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ jsonData: [{ data }] }),
  //       }
  //     );

  //     if (response.ok) {
  //       const newTask = await response.json();
  //       reset();
  //       toggleDrawer();
  //     } else {
  //       console.error("Erro ao adicionar tarefa1:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Erro ao adicionar tarefa:", error);
  //   }
  // };

  const jsonData = {
    jsonData: [
      {
        prioridade: 1,
        oque: "teste do postman",
        porque: "fsadsas",
        comoOnde: "dsads",
        idUsuarioQuem: 1430,
        dt_de: "05/03/2024", // A data formatada corretamente
        dt_ate: "29/03/2024", // A data formatada corretamente
        valor: 32432,
        concluido: 0,
        dt_concluido: null,
      },
    ],
  };

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      data.dt_de = dayjs(data.dt_de).format("DD/MM/YYYY");
      data.dt_ate = dayjs(data.dt_ate).format("DD/MM/YYYY");
      console.log(data);
      
      const response = await fetch(
        "http://localhost:4272/Servicos/cadTarefas.asmx/CreateTarefas?IdPK=&idReuniao=&abertas=true&concluidas=false&vencidas=true",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "ASP.NET_SessionId": "i2fwmyjidh5wbviihis11yti",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        }
      );

      if (!response.ok) {
        throw new Error("erro");
      }

      const result = await response.json();
      console.log(result);
      // Faça algo com os dados recebidos
    } catch (e) {
      console.error("Houve um problema com a operação fetch: ");
    }
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
                {...register("prioridade")}
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
                multiline
                {...register("oque")}
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
                multiline
                {...register("porque")}
              />
              <label id="comoOnde">Como/Onde</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="comoOnde"
                variant="filled"
                multiline
                {...register("comoOnde")}
              />
              <label id="idUsuarioQuem">Quem</label>
              <Select
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="idUsuarioQuem"
                variant="filled"
                {...register("idUsuarioQuem")}
              >
                {names.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
              <label id="dt_de">Data Inicial</label>
              <Controller
                control={control}
                name="dt_de"
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
              <label id="dt_ate">Data Final</label>
              <Controller
                control={control}
                name="dt_ate"
                render={({ field }) => (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={field.value}
                      onChange={(value) => {
                        field.onChange(value);
                      }}
                      format="YYYY-MM-DD"
                    />
                  </LocalizationProvider>
                )}
              />
              <label id="valor">Valor</label>
              <TextField
                inputProps={{
                  style: {
                    padding: 5,
                  },
                }}
                id="valor"
                variant="filled"
                multiline
                {...register("valor")}
              />
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
                sx={{ backgroundColor: "primary.main", color: "common.white" }}
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
