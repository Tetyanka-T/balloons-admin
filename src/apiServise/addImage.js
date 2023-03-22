import axios from "axios";

// const API_KEY = "5137d5fb4c1390766979c038e30b6359";

// const postImg = "https://api.imgbb.com/1/upload";

export const addImage = async (data) => {
  const response = await axios.post(
    "https://api.imgbb.com/1/upload?key=5137d5fb4c1390766979c038e30b6359",
    data
  );
  const img = response;
  console.log(img);
  return img;
};
