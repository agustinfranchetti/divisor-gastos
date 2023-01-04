import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { ContentCopy, MoreVert } from "@mui/icons-material";

export const Profile = () => {
  return (
    <Paper elevation={1}>
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"10px"}
      >
        <Avatar
          src="https://bit.ly/dan-abramov"
          style={{ height: "60px", width: "60px" }}
        />
        <Typography variant="h6">Dan Abramov</Typography>
        <Button>
          <MoreVert />
        </Button>
      </Grid>
      <Divider />
      <BankCBU />
      <BankCBU />
      <BankCBU />
    </Paper>
  );
};

const BankCBU = () => {
  return (
    <Grid
      container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"10px"}
    >
      <Avatar
        src="https://play-lh.googleusercontent.com/4hN-UTy-2_Ma1Ouye5FpN2Issj73Oms62hokLp5OZR6zdt2yzkEpGSpK0v47RK8Oc8Q=w480-h960-rw"
        style={{ height: "60px", width: "60px" }}
      />
      <Typography variant="h6">323248234802384048</Typography>
      <Button>
        <ContentCopy />
      </Button>
    </Grid>
  );
};
