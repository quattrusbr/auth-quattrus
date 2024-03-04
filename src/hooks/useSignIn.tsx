import { BaseSyntheticEvent, ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserFormSchema, createUserFormSchema } from "@/lib/schemas";
import { useOpenSnackbar } from "@/contexts/snackbar-context";
import { useRouter } from "next/navigation";

export function useSignIn() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { notification } = useOpenSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormSchema>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      company: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = async (
    data: CreateUserFormSchema,
    event?: BaseSyntheticEvent<object, any, any>
  ) => {
    event?.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (responseData.user) {
        notification({ message: "Logado com sucesso", severity: "success" });
        router.push("/");
      } else {
        notification({ message: "Credenciais incorretas", severity: "error" });
      }
    } catch (err) {
      console.error(err);
      notification({ message: "Erro ao logar", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    loading,
  };
}
