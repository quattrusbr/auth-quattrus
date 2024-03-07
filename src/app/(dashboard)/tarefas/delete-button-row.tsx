import { Button } from "@/app/components/button";
import { TableCell } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTaskAction } from "./delete-task-action";
import { useState } from "react";
import { Task } from "@/types/types";
import { useOpenSnackbar } from "@/contexts/snackbar-context";

export function DeleteButtonRow({ row }: { row: Task }) {
  const [loading, setIsLoading] = useState(false);
  const { notification } = useOpenSnackbar();

  async function handleDelete(task: Task) {
    setIsLoading(true);
    try {
      await deleteTaskAction(task);
      notification({
        message: "Tarefa excluída com sucesso",
        severity: "success",
      });
    } catch (err) {
      console.error(err);
      notification({ message: "Erro ao excluir tarefa", severity: "error" });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <Button onClick={() => handleDelete(row)} loading={loading}>
        <DeleteIcon fontSize="small" />
      </Button>
    </>
  );
}
