import axios from "axios";

axios.defaults.baseURL = "https://balloons-shop.onrender.com";

export const getBalloons = async () => {
  const balloons = await axios.get("api/balloons");
  return balloons.data.data;
};

export const getBalloonsById = async (balloonId) => {
  const balloon = await axios.get(`api/balloons/${balloonId}`);
  return balloon.data.data;
};
export const changeBalloon = async (balloonId) => {
  const balloon = await axios.put(`api/balloons/${balloonId}`);
  return balloon.data;
};
export const getOrders = async () => {
  const orders = await axios.get("api/orders");
  return orders.data.data;
};

export const changeOrderStatus = async (orderId, statusOrder) => {
  const response = await axios.patch(
    `api/orders/${orderId}/statusOrder`,
    statusOrder
  );
  return response.data;
};
export const deleteOrder = async (orderId) => {
  await axios.delete(`api/orders/${orderId}`);
};

export const registerAdmin = async (credentials) => {
  const response = await axios.post("api/auth/registration", credentials);
  return response;
};

export const adminLogIn = async (credentials) => {
  const response = await axios.post("api/auth/login", credentials);
  return response;
};

export const adminLogOut = async () => {
  await axios.post("api/auth/logout");
};
