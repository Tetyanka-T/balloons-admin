import { Container } from "@mui/material";
import OrdersList from "components/OrdersList/OrdersList";
import { useEffect, useState } from "react";
import AdminHeader from "components/Header/AdminHeader";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import * as API from "../apiServise/api";

function OrdersPageNew() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.getOrders().then(setOrders);
  }, []);

  const newOrders = orders.filter((order) => order.statusOrder === "новий");

  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
        {newOrders && <OrdersList orders={newOrders} />}
      </Container>
    </>
  );
}

export default OrdersPageNew;
