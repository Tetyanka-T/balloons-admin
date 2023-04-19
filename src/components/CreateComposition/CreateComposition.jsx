import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { Formik, Form } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import * as API from "../../apiServise/api";
import TextFieldWrapper from "components/FormComponent/TextField";
import s from "./CreateComposition.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});

const initialState = {
  name: "",
  category: "",
  grup: "",
  gender: "",
  description: "",
  price: "",
  code: "",
  filter: "",
  imgSrc: "",
};

const formValidation = Yup.object().shape({
  name: Yup.string().required("Назва композиції обов'язкова"),
  category: Yup.string().required("Назва категорії обов'язкова"),
  grup: Yup.string(),
  gender: Yup.string().required("Вказати стать"),
  description: Yup.string().required("Опис композиції обов'язковий"),
  price: Yup.number().min(0.01).required("Ціна обов'язкова"),
  code: Yup.string().required("Артикул обов'язковий"),
  filter: Yup.string().required("Вкажіть слова для фільтрації"),
  imgSrc: Yup.string().required("Посилання на фото композиції обов'язкове"),
});

const CreateComposition = () => {
  return (
    <Formik
      initialValues={{ ...initialState }}
      validationSchema={formValidation}
      onSubmit={(values) => {
        API.addBalloon(values);
        toast.success("Композиція успішно добавлена");
      }}
    >
      <Form className={s.form}>
        <ThemeProvider theme={theme}>
          <TextFieldWrapper id="name" name="name" label="Назва композиції" />

          <TextFieldWrapper
            id="category"
            name="category"
            label="Категорія композиції"
          />

          <TextFieldWrapper
            id="grup"
            name="grup"
            label="Підкатегорія композиції"
          />

          <TextFieldWrapper
            id="gender"
            name="gender"
            label="Для кого (стать) композиція"
          />

          <TextFieldWrapper
            id="description"
            name="description"
            label="Опис композиції"
          />

          <TextFieldWrapper id="price" name="price" label="Ціна композиції" />

          <TextFieldWrapper id="code" name="code" label="Артикул композиції" />

          <TextFieldWrapper
            id="filter"
            name="filter"
            label="Ключові слова для фільтрації"
          />

          <TextFieldWrapper
            id="imgSrc"
            name="imgSrc"
            label="Посилання на фото"
          />

          <Button type="submit" variant="contained" sx={{ width: 100, m: 5 }}>
            Створити
          </Button>
        </ThemeProvider>
      </Form>
    </Formik>
  );
};

export default CreateComposition;
