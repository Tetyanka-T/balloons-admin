import { Button, TextField } from "@mui/material";
import { addImage } from "apiServise/addImage";
import { useState } from "react";

const AddImg = () => {
  const [file, setFile] = useState(null);

  const changeHandler = (event) => {
    setFile(event.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    console.log(formData);
    addImage(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          type="file"
          // accept="image/*"
          id="img"
          // name="file"

          onChange={changeHandler}
        />
        <Button type="submit" variant="contained" sx={{ width: 100, m: 5 }}>
          Відправити
        </Button>
      </form>
    </>
  );
};

export default AddImg;
