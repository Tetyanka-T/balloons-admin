import { Button, TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./CreateComposition.module.scss";
import AddImg from "components/AddImg/AddImg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
  },
});
const CreateComposition = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      grup: "",
      gender: "",
      description: "",
      price: "",
      code: "",
      filter: "",
      imgSrc: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Назва композиції обов'язкова"),
      category: Yup.string().required("Назва категорії обов'язкова"),
      grup: Yup.string(),
      gender: Yup.string().required("Вказати стать"),
      description: Yup.string().required("Опис композиції обов'язковий"),
      price: Yup.number().min(0.01).required("Ціна обов'язкова"),
      code: Yup.string().required("Артикул обов'язковий"),
      filter: Yup.string().required("Вкажіть слова для фільтрації"),
      imgSrc: Yup.string().required("Посилання на фото композиції обов'язкове"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className={s.form}>
        <ThemeProvider theme={theme}>
          <TextField
            id="name"
            name="name"
            label="Назва композиції"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            sx={{ width: 480, mt: 3 }}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <TextField
            id="category"
            name="category"
            label="Категорія композиції"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ width: 480, mt: 3 }}
          />
          {formik.touched.category && formik.errors.category ? (
            <div>{formik.errors.category}</div>
          ) : null}
          <TextField
            id="grup"
            name="grup"
            label="Підкатегорія композиції"
            value={formik.values.grup}
            onChange={formik.handleChange}
            sx={{ width: 480, mt: 3 }}
          />
          {formik.touched.grup && formik.errors.grup ? (
            <div>{formik.errors.grup}</div>
          ) : null}
          <TextField
            id="gender"
            name="gender"
            label="Для кого (стать) композиція"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ width: 480, mt: 3 }}
          />
          {formik.touched.gender && formik.errors.gender ? (
            <div>{formik.errors.gender}</div>
          ) : null}
          <TextField
            id="description"
            name="description"
            label="Опис композиції"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ width: 480, mt: 3 }}
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
          <TextField
            id="price"
            name="price"
            label="Ціна композиції"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ width: 480, mt: 3 }}
          />
          {formik.touched.price && formik.errors.price ? (
            <div>{formik.errors.price}</div>
          ) : null}
          <TextField
            id="code"
            name="code"
            label="Артикул композиції"
            value={formik.values.code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ width: 480, mt: 3 }}
          />
          {formik.touched.code && formik.errors.code ? (
            <div>{formik.errors.code}</div>
          ) : null}
          <TextField
            id="filter"
            name="filter"
            label="Ключові слова для фільтрації"
            value={formik.values.filter}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ width: 480, mt: 3 }}
          />
          {formik.touched.filter && formik.errors.filter ? (
            <div>{formik.errors.filter}</div>
          ) : null}
          <TextField
            id="imgSrc"
            name="imgSrc"
            label="Посилання на фото"
            value={formik.values.imgSrc}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            sx={{ width: 480, mt: 3 }}
          />
          {formik.touched.imgSrc && formik.errors.imgSrc ? (
            <div>{formik.errors.imgSrc}</div>
          ) : null}
          <Button type="submit" variant="contained" sx={{ width: 100, m: 5 }}>
            Створити
          </Button>
        </ThemeProvider>
      </form>
      <AddImg />
    </>
  );
};

export default CreateComposition;
