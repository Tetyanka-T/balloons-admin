import { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "components/Header/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import s from "./PagesStyles.module.scss";
import { authOperations, authSelectors } from "redux/auth";
import toast from "react-hot-toast";

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const HomePage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = ({ target: { type, value } }) => {
    switch (type) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkValue = email === "" || password === "";

    if (checkValue) {
      return toast.error("Щось не так, спробуй ще :(");
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/orders" />
      ) : (
        <>
          <Header />
          <h1 className={s.homePage_title}>
            А хто це до нас завітав? Перевір, чи маєш ти доступ
          </h1>
          <form onSubmit={handleSubmit} className={s.login_form}>
            <ThemeProvider theme={theme}>
              <TextField
                type="email"
                value={email}
                label="Email"
                variant="outlined"
                onChange={handleChange}
                className={s.login_form__input}
              />
              <TextField
                type="password"
                value={password}
                label="Password"
                variant="outlined"
                onChange={handleChange}
                className={s.login_form__input}
              />
              <Button
                variant="contained"
                type="submit"
                className={s.login_form__button}
              >
                Увійти
              </Button>
            </ThemeProvider>
          </form>
        </>
      )}
    </>
  );
};

export default HomePage;
