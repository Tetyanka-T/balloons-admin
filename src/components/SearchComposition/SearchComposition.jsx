import { TextField } from "@mui/material";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import * as API from "../../apiServise/api";
import CardDescription from "components/CardDescription/CardDescription";

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

  const handleSearch = (e) => {
    e.preventDefault();
    API.getBalloons().then(setBalloons);
    if (balloons) {
      const code = balloons.find((b) => b.code === e.target[0].value);
      setSearch(code);
    }
    return;
  };
  return (
    <>
      <form onSubmit={handleSearch}>
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
