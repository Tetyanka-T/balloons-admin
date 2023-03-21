import { Button, TextField } from "@mui/material";

const AddImg = () => {
  return (
    <>
      <TextField type="file" />
      <Button type="submit" variant="contained" sx={{ width: 100, m: 5 }}>
        Відправити
      </Button>
    </>
  );
};

export default AddImg;
