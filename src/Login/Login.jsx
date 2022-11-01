import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
          Tizimga Kirish!
          </Typography>
          <TextField
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email pochtangizni kiriting"
          />
          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Parolingizni kiriting"
          />
          <Button
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 3, marginBottom:3, }}>
            Tizimga Kirish!
          </Button>
          <Link to='/signup'
            sx={{ marginTop: 10, borderRadius: 3 }}>
            Ro'yxatdan o'tish!
          </Link>
        </Box>
      </form>
    </div>
  );
};

export default Login;
