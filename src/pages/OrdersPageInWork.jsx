import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import AdminHeader from "components/Header/AdminHeader";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import OrdersList from "components/OrdersList/OrdersList";
import * as API from "../apiServise/api";

const OrdersPageInWork = () => {
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   API.getOrders().then(setOrders);
  // }, []);

  // const inWorkOrder = orders.filter(
  //   (order) => order.statusOrder === "в роботі"
  // );
  useEffect(() => {
    async function onFetchOrders() {
      try {
        const orders = await API.getOrders();

        if (!orders) {
          throw new Error();
        }
        const newOrders = orders.filter(
          (order) => order.statusOrder === "в роботі"
        );
        setOrders(newOrders);
      } catch (err) {
        console.log(err.message);
      }
    }
    onFetchOrders();
  }, []);

  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
        {orders && <OrdersList orders={orders} />}
        {orders.length === 0 && <h2>У вас немає замовлень в роботі</h2>}
      </Container>
    </>
  );
};

export default OrdersPageInWork;
