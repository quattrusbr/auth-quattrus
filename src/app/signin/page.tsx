"use client";
import { Typography, FormControl, TextField, Box, Link } from "@mui/material";
import logoSimplify from "./../../../public/assets/logoSimplify.svg";
import logoQuattrus from "./../../../public/assets/logoQuattrusGreen.svg";
import { useSignIn } from "./hooks/useSignIn";
import { Button } from "../components/button";
import styles from "./styles.module.css";
import { useEffect } from "react";

export default function SignIn() {
  const { register, handleSubmit, errors, loading, onSubmit } = useSignIn();

  return (
    <>
      <div className={styles.bgStyle}></div>

      <Box
        sx={{
          borderRadius: "20px",
          backgroundImage: "linear-gradient(315deg, #ffffff, #F1F3F4)",
          //boxShadow: "-1px -1px 1px #bebebe, 1px 1px 1px #ffffff",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          left: "20%",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "30px",
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <img className="max-h-20" src={logoSimplify.src}></img>
          <img className="max-h-11 pr-5" src={logoQuattrus.src}></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "20px",
          }}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
            style={{ width: "100%" }}
          >
            <Typography
              color="primary"
              align="left"
              gutterBottom={true}
              variant="inherit"
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              Seja bem-vindo!
            </Typography>
            <TextField
              sx={{
                borderRadius: "8px",
                color: "primary.main",
                fontSize: "12px",
                paddingTop: 0,
                paddingBottom: "2px",
              }}
              variant="standard"
              color="primary"
              label="Empresa"
              {...register("company", { required: true })}
            />
            {errors?.company && (
              <Typography variant="caption" color="error">
                {errors.company.message}
              </Typography>
            )}
            <TextField
              sx={{
                color: "primary.main",
                fontSize: "12px",
                paddingTop: 0,
                paddingBottom: "2px",
                // "& .MuiInput-input": {
                //   backgroundColor: "grey.100",
                //   borderRadius: "4px",
                // },
              }}
              variant="standard"
              color="primary"
              label="Nome"
              {...register("username", { required: true })}
            />
            {errors?.username && (
              <Typography variant="caption" color="error">
                {errors.username.message}
              </Typography>
            )}
            <TextField
              sx={{
                borderRadius: "8px",
                color: "primary.main",
                fontSize: "12px",
                paddingTop: 0,
                paddingBottom: "2px",
              }}
              variant="standard"
              color="primary"
              label="Senha"
              type="password"
              {...register("password", { required: true })}
            />
            {errors?.password && (
              <Typography variant="caption" color="error">
                {errors.password.message}
              </Typography>
            )}
            <Button
              loading={loading}
              sx={{
                borderRadius: "8px",
                backgroundColor: "primary.main",
                color: "common.white",
                padding: "7px 10px",
                marginTop: "30px",
                fontSize: "12px",
                maxWidth: "115px",
                "&:hover": {
                  color: "common.black",
                  borderColor: "grey.400",
                  border: "1px",
                },
              }}
              type="submit"
            >
              Entrar
            </Button>
            <Typography
              variant="caption"
              color="primary.main"
              sx={{ fontWeight: "bold", marginTop: "10px" }}
            >
              <Link href="/forgot-password" underline="always">
                Esqueceu a senha?
              </Link>
            </Typography>
          </form>
        </Box>
      </Box>
    </>
  );
}
