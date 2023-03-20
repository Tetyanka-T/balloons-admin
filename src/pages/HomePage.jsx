import { useState } from "react";
import Header from "components/Header/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import s from "./PagesStyles.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const HomePage = () => {
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

    // if (checkValue) {
    //   return toast.error('Error, empty field!');
    // }
    // dispatch(authOperations.logIn({ email, password }));
    // setEmail('');
    // setPassword('');
  };
  return (
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
  );
};

export default HomePage;
