import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { toast } from "react-hot-toast";
import * as API from "../../apiServise/api";
import CardDescription from "components/CardDescription/CardDescription";
import s from "./SearchComposition.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const SearchComposition = () => {
  const [balloons, setBalloons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.getBalloons().then(setBalloons);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (balloons) {
      const code = balloons.find((b) => b.code === e.target[0].value);
      setSearch(code);
      if (!code) {
        toast.error("Композиція з даним артиклом відсутня");
      }
    }
    return;
  };
  return (
    <>
      <form onSubmit={handleSearch} className={s.form}>
        <ThemeProvider theme={theme}>
          <TextField
            id="search"
            name="search"
            type="text"
            label="Пошук композиції за кодом"
            sx={{ width: 280, mt: -3 }}
          />
        </ThemeProvider>
      </form>
      {search && <CardDescription balloons={search} />}
    </>
  );
};

export default SearchComposition;
