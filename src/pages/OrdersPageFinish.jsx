import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import AdminHeader from "components/Header/AdminHeader";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import OrdersList from "components/OrdersList/OrdersList";
import * as API from "../apiServise/api";

const OrdersPageFinish = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.getOrders().then(setOrders);
  }, []);

  const finishOrder = orders.filter(
    (order) => order.statusOrder === "завершений"
  );
  console.log(finishOrder);
  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
        {finishOrder && <OrdersList orders={finishOrder} />}
        {finishOrder.length === 0 && <h2>У вас немає завершених замовлень</h2>}
      </Container>
    </>
  );
};

export default OrdersPageFinish;
