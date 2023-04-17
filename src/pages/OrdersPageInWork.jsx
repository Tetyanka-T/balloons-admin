import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import AdminHeader from "components/Header/AdminHeader";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import OrdersList from "components/OrdersList/OrdersList";
import * as API from "../apiServise/api";

const OrdersPageInWork = () => {
  const [orders, setOrders] = useState([]);
  const [ordersNew, setOrdersNew] = useState([]);
  console.log(ordersNew);

  useEffect(() => {
    API.getOrders().then(setOrders);
  }, []);

  //   useEffect(() => {
  //     orders.filter((order) => order.statusOrder === "в роботі")

  //   }, []);

  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
        {ordersNew && <OrdersList orders={ordersNew} />}
      </Container>
    </>
  );
};

export default OrdersPageInWork;
