import { Container } from "@mui/material";
import OrdersList from "components/OrdersList/OrdersList";
import { useEffect, useState } from "react";
import AdminHeader from "components/Header/AdminHeader";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import * as API from "../apiServise/api";

function OrdersPageNew() {
  const [orders, setOrders] = useState([]);
  // const [newOrders, setNewOrders] = useState([]);

  useEffect(() => {
    API.getOrders().then(setOrders);
  }, []);

  const newOrders = orders.filter((order) => order.statusOrder === "новий");

  // useEffect(() => {
  //   async function onFetchOrders() {
  //     try {
  //       const orders = await API.getOrders();

  //       if (!orders) {
  //         throw new Error();
  //       }
  //       const newOrders = orders.filter(
  //         (order) => order.statusOrder === "новий"
  //       );
  //       setOrders(newOrders);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }
  //   onFetchOrders();
  // }, []);
  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
        {newOrders && <OrdersList orders={newOrders} />}
        {newOrders.length === 0 && <h2>У вас немає нових замовлень</h2>}
      </Container>
    </>
  );
}

export default OrdersPageNew;
