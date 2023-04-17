import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import AdminHeader from "components/Header/AdminHeader";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import OrdersList from "components/OrdersList/OrdersList";
import * as API from "../apiServise/api";

const OrdersPageInWork = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.getOrders().then(setOrders);
  }, []);

  const inWorkOrder = orders.filter(
    (order) => order.statusOrder === "в роботі"
  );
  console.log(inWorkOrder);
  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
        {inWorkOrder && <OrdersList orders={inWorkOrder} />}
      </Container>
    </>
  );
};

export default OrdersPageInWork;
