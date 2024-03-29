import axios from "axios";

axios.defaults.baseURL = "https://balloons-shop.onrender.com";

// balloons

export const getBalloons = async () => {
  const balloons = await axios.get("api/balloons");
  return balloons.data.data;
};

export const getBalloonsById = async (balloonId) => {
  const balloon = await axios.get(`api/balloons/${balloonId}`);
  return balloon.data.data;
};
export const changeBalloon = async (balloonId, balloonChange) => {
  const balloon = await axios.put(`api/balloons/${balloonId}`, balloonChange);
  return balloon;
};
export const addBalloon = async (balloon) => {
  const { data } = await axios.post("api/balloons", balloon);
  return data;
};

export const deleteBalloon = async (balloonId) => {
  await axios.delete(`api/balloons/${balloonId}`);
};

// orders
export const getOrders = async () => {
  const orders = await axios.get("api/orders");
  return orders.data.data;
};

export const changeOrder = async (orderId, orderChange) => {
  const order = await axios.put(`api/orders/${orderId}`, orderChange);
  return order;
};
export const changeOrderStatus = async (orderId, statusOrder) => {
  const response = await axios.patch(
    `api/orders/${orderId}/statusOrder`,
    statusOrder
  );
  return response.data;
};
export const changeOrderStatusFinish = async (orderId, statusFinish) => {
  const response = await axios.patch(
    `api/orders/${orderId}/statusFinish`,
    statusFinish
  );
  return response.data;
};
export const deleteOrder = async (orderId) => {
  await axios.delete(`api/orders/${orderId}`);
};

// admins
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

export const adminCurrent = async () => {
  const response = await axios.get("api/auth/current");
  return response;
};
