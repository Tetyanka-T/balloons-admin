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
  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
        {inWorkOrder && <OrdersList orders={inWorkOrder} />}
        {inWorkOrder.length === 0 && <h2>У вас немає замовлень в роботі</h2>}
      </Container>
    </>
  );
};

export default OrdersPageInWork;
