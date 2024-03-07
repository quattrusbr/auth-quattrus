"use client";
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {} from "@mui/x-date-pickers/DatePicker";
import {
  Badge,
  Box,
  Checkbox,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { Task } from "@/types/types";
import { Button } from "@/app/components/button";
import { DeleteButtonRow } from "./delete-button-row";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTaskAction } from "./add-task-action";
import { useOpenSnackbar } from "@/contexts/snackbar-context";
import { usePagination } from "../../../hooks/usePagination";

const names = [{ value: 1430 }];

export interface IFormInputs {
  prioridade: string;
  oque: string;
  porque: string;
  comoOnde: string;
  idUsuarioQuem: number;
  dt_de: string | null;
  dt_ate: string | null;
  valor: number;
  concluido: boolean;
}

export const AddTasks = ({ tasks }: { tasks: Task[] }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { notification } = useOpenSnackbar();
  const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    usePagination();

  const { handleSubmit, control, reset, register } = useForm<IFormInputs>({
    defaultValues: {
      prioridade: "",
      oque: "",
      porque: "",
      comoOnde: "",
      idUsuarioQuem: 0,
      dt_de: null,
      dt_ate: null,
      valor: 0,
      concluido: false,
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    try {
      data.dt_de = dayjs(data.dt_de).format("DD/MM/YYYY");
      data.dt_ate = dayjs(data.dt_ate).format("DD/MM/YYYY");
      await createTaskAction(data);
      notification({
        message: "Tarefa criada com sucesso",
        severity: "success",
      });
    } catch (e) {
      console.error("Houve um problema com a operação fetch: " + e);
      notification({ message: "Erro ao criar tarefa", severity: "error" });
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

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="bg-ghostGray px-3 py-2 flex justify-between">
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
      <TableContainer sx={{ overflow: "hidden" }}>
        <Table
          sx={{ minWidth: 650, maxHeight: 850, overflow: "auto" }}
          aria-label="tabela de projetos paginada"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">PR</TableCell>
              <TableCell align="center">O que</TableCell>
              <TableCell align="center">Por quê?</TableCell>
              <TableCell align="center">Como/Onde</TableCell>
              <TableCell align="center">Quem</TableCell>
              <TableCell align="center">Data inicial</TableCell>
              <TableCell align="center">Data Final</TableCell>
              <TableCell align="center">Valor</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: Task) => (
                <TableRow
                  key={row.idTarefa}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.prioridade}</TableCell>
                  <TableCell align="center">{row.oque}</TableCell>
                  <TableCell align="center">{row.porque}</TableCell>
                  <TableCell align="center">{row.comoOnde}</TableCell>
                  <TableCell align="center">{row.idUsuarioQuem}</TableCell>
                  <TableCell align="center">
                    {dataDeFormatada(row.dt_de)}
                  </TableCell>
                  <TableCell align="center">
                    {dataAteFormatada(row.dt_ate)}
                  </TableCell>
                  <TableCell align="center">{row.valor}</TableCell>
                  <TableCell align="center">
                    <Badge
                      badgeContent={row.status}
                      color={row.status === "A" ? "info" : "error"}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="grid-menu"
                      aria-labelledby="grid-button"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <DeleteButtonRow row={row} />
                      <Button>
                        <EditIcon fontSize="small" />
                      </Button>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        labelRowsPerPage="Linhas por página:"
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={tasks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
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
            className="mx-[40px] mt-5 flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl
              fullWidth
              sx={{ marginBottom: 2, display: "flex", gap: "10px" }}
            >
              <label id="prioridade">Prioridade</label>
              <TextField
                id="prioridade"
                variant="filled"
                size="small"
                hiddenLabel
                type="number"
                {...register("prioridade")}
              />

              <label id="oque">O que</label>
              <TextField
                id="oque"
                variant="filled"
                size="small"
                hiddenLabel
                multiline
                {...register("oque")}
              />

              <label id="porque">Por quê?</label>
              <TextField
                id="porque"
                variant="filled"
                size="small"
                hiddenLabel
                multiline
                {...register("porque")}
              />
              <label id="comoOnde">Como/Onde</label>
              <TextField
                id="comoOnde"
                variant="filled"
                size="small"
                hiddenLabel
                multiline
                {...register("comoOnde")}
              />

              <label id="idUsuarioQuem">Quem</label>
              <Select
                size="small"
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
                id="valor"
                variant="filled"
                size="small"
                hiddenLabel
                {...register("valor")}
              />
            </FormControl>
            <FormControlLabel
              control={
                <Controller
                  name={"concluido"}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  )}
                />
              }
              label={"Concluído"}
            />
            <div className="flex justify-center gap-4">
              <Button
                type="button"
                //@ts-ignore
                variant="containedSecondary"
                onClick={toggleDrawer}
              >
                Cancelar
              </Button>
              <Button variant="contained" type="submit">
                Salvar
              </Button>
            </div>
          </form>
        </Box>
      </Drawer>
    </>
  );
};
