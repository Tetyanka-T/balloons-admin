import { useState } from "react";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
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
  const [statusFinishCheck, setStatusFinishCheck] = useState(false);

  const changeFinish = () => {
    const finishOrder = {
      statusOrder: "завершений",
    };

    API.changeOrderStatusFinish(orderId, finishOrder);
  };

  const handleChangeCheck = (event) => {
    setStatusFinishCheck(event.target.checked);
    changeFinish();
    toast.success("Статус замовлення успішно змінено, обновіть сторінку");
  };

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
        </Select>
        <FormGroup className={s.orderForm_chekbox}>
          <FormControlLabel
            control={
              <Checkbox
                checked={statusFinishCheck}
                onChange={handleChangeCheck}
                className={s.orderForm_chekbox_lable}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="Замовлення завершене"
          />
        </FormGroup>
      </ThemeProvider>
    </FormControl>
  );
};

export default ChangeStatus;
