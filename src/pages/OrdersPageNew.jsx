import { Container } from "@mui/material";
import OrdersList from "components/OrdersList/OrdersList";
import { useEffect, useState } from "react";
import AdminHeader from "components/Header/AdminHeader";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import * as API from "../apiServise/api";

function OrdersPageNew() {
  const [orders, setOrders] = useState([]);
  const [ordersNew, setOrdersNew] = useState([]);
  console.log(ordersNew);

  useEffect(() => {
    API.getOrders().then(setOrders);
    const showOrdersNew = () => {
      if (!orders) {
        return;
      }
      const newOrders = orders.filter((order) => order.statusOrder === "новий");
      setOrdersNew(newOrders);
    };
    showOrdersNew();
  }, []);

  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
        {ordersNew && <OrdersList orders={ordersNew} />}
      </Container>
    </>
  );
}

export default OrdersPageNew;
