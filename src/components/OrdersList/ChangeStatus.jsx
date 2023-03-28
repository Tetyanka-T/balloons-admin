import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import * as API from "../../apiServise/api";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const ChangeStatus = ({ order }) => {
  const [statusOrder, setStatus] = useState("");
  console.log(statusOrder);

  const handleChange = (event) => {
    const statusOrder = event.target.value;
    API.changeOrderStatus(order, statusOrder).then(setStatus);
  };

  return (
    <FormControl sx={{ width: 320 }}>
      <ThemeProvider theme={theme}>
        <InputLabel id="status">Змінити статус замовлення</InputLabel>
        <Select
          labelId="status"
          id="status"
          value={statusOrder}
          label="Змінити статус замовлення"
          onChange={handleChange}
        >
          <MenuItem value={"В роботі"}>В роботі</MenuItem>
          <MenuItem value={"Завершений"}>Завершений</MenuItem>
        </Select>
      </ThemeProvider>
    </FormControl>
  );
};

export default ChangeStatus;
