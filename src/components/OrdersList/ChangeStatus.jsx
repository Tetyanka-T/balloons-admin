import { useState } from "react";
import { Select, FormControl, InputLabel, MenuItem } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { toast } from "react-hot-toast";
import * as API from "../../apiServise/api";
import s from "./OrdersList.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const ChangeStatus = ({ order }) => {
  const [statusOrder, setStatus] = useState("");
  const orderId = order._id;
  const handleChange = (event) => {
    const statusOrder = {
      statusOrder: event.target.value,
    };
    API.changeOrderStatus(orderId, statusOrder);
    setStatus(event.target.value);
    toast.success("Статус замовлення успішно змінено, обновіть сторінку");
  };

  return (
    <FormControl sx={{ width: 320 }} className={s.changestatus}>
      <ThemeProvider theme={theme}>
        <InputLabel id="status">Змінити статус замовлення</InputLabel>
        <Select
          labelId="status"
          id="status"
          value={statusOrder}
          label="Змінити статус замовлення"
          onChange={handleChange}
        >
          <MenuItem value={"в роботі"}>В роботі</MenuItem>
          <MenuItem value={"завершений"}>Завершений</MenuItem>
        </Select>
      </ThemeProvider>
    </FormControl>
  );
};

export default ChangeStatus;
