import { FormEvent, useState } from "react";
import type { NextPage } from "next";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Box,
  Typography,
  Container,
  CircularProgress,
} from "@mui/material";
import { FcFeedback } from "react-icons/fc";
import Header from "../components/Header";

function Copyright(props: any) {
  return (
    <Typography
    className="text-center items-center text-white"
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Contact: NextPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [comment, setComment] = useState("");

  const isLoading = false;
  const handelCansel = () => {};
  return (
    <div className="w-full -mb-10 h-auto min-h-[70vh] bg-gray-900">
      <Header />
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar className="bg-[#9c27b0] w-auto h-auto p-4 rounded-full m-1">
            <FcFeedback className="text-6xl"/>
          </Avatar>
          <Typography component="h1" className="text-white" variant="h3">
            Send to Us a Feedback
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            className="w-full mt-4 p-8 text-lg flex-col flex min-h-[60vh] justify-center items-center rounded-lg bg-white"
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className="text-lg"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Name"
              label="User Name"
              id="userName"
              autoComplete="current-name"
              className="text-lg"
            />
            <div className="w-full mt-[5vh] mb-[5vh] rounded-lg">
              <div className="">
                <label
                  htmlFor="comment"
                  className="text-2xl mb-4 text-center flex items-center justify-center w-full text-gray-600"
                >
                  Add your Feedback
                </label>
                <textarea
                  className="w-full  min-h-[35vh] p-2 border rounded focus:outline-none focus:ring-blue-600 focus:ring-1"
                  placeholder="Feedback"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="flex justify-around w-full item-center">
              {isLoading ? (
                <Button
                  className="px-3 py-2 text-2xl text-blue-100 bg-blue-600 rounded drop-shadow-md
                                        hover:bg-white hover:drop-shadow-2xl hover:text-blue-600 hover:rounded-3xl hover:border hover:border-blue-600 transition-all duration-[130ms] ease-in-out"
                  type="submit"
                  disabled
                  variant="contained"
                >
                  <CircularProgress />
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  className="px-3 py-2 text-2xl text-blue-100 bg-blue-600 rounded drop-shadow-md
                                            hover:bg-white hover:drop-shadow-2xl hover:text-blue-600 hover:rounded-3xl hover:border hover:border-blue-600 transition-all duration-[130ms] ease-in-out"
                >
                  Send
                </Button>
              )}

              <Button
                onClick={handelCansel}
                variant="contained"
                className="px-3 py-2 text-2xl text-blue-600 border border-blue-500 drop-shadow-md 
                                        hover:bg-blue-600 hover:drop-shadow-2xl hover:text-white hover:rounded-3xl transition-all duration-[130ms] ease-in-out"
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  );
};

export default Contact;
