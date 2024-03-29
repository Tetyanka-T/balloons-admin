import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";
import { TextField, Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import toast from "react-hot-toast";
import s from "./PagesStyles.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

function LoginPage() {
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
    dispatch(authOperations.login({ email, password }));
    setEmail("");
    setPassword("");
  };
  return (
    <>
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
            label="Пароль"
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
}

export default LoginPage;
