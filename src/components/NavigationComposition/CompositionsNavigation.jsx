import { NavLink } from "react-router-dom";
import { TextField } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import s from "./CompositionsNavigation.module.scss";
import CreateComposition from "components/CreateComposition/CreateComposition";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const CompositionsNavigation = ({ change }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <ul className={s.navigation_list}>
        <li>{change}</li>
        <li>
          <ThemeProvider theme={theme}>
            <TextField
              id="search"
              name="search"
              label="Пошук композиції за кодом"
              value={search}
              onChange={handleChange}
              sx={{ width: 280, mt: -3 }}
            />
          </ThemeProvider>
        </li>
      </ul>
    </>
  );
};

export default CompositionsNavigation;
