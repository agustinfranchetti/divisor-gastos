import { BigLogo } from "./BigLogo";
import { Grid, TextField, Button, Typography } from "@mui/material";

export const Register = () => {
  return (
    <Grid
      container
      direction={"column"}
      height={"100vh"}
      gap={2}
      paddingX="5%"
      alignItems="center"
      justifyContent={"center"}
    >
      <BigLogo />
      <TextField variant="outlined" placeholder="ejemplo@gmail.com"></TextField>
      <TextField variant="outlined" placeholder="contraseña123"></TextField>
      <Button variant="contained">Registrar</Button>
      <Typography color={"gray"} paddingTop="20px">
        No mas clavos en los asados 👀
      </Typography>
      <Typography
        variant="subtitle1"
        position={"absolute"}
        bottom="20px"
        color="lightgray"
        textAlign={"center"}
        width="100%"
        left={"0"}
      >
        Agustin Franchetti - 2023
      </Typography>
    </Grid>
  );
};
