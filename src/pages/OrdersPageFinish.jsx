import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import AdminHeader from "components/Header/AdminHeader";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import OrdersList from "components/OrdersList/OrdersList";
import Loader from "components/Loader/Loader";
import * as API from "../apiServise/api";

const OrdersPageFinish = () => {
  const [orders, setOrders] = useState([]);
  const [reqStatus, setReqStatus] = useState("idle");

  useEffect(() => {
    async function onFetchOrders() {
      try {
        setReqStatus("pending");
        const orders = await API.getOrders();

        if (!orders) {
          throw new Error();
        }
        const finishOrders = orders.filter(
          (order) => order.statusOrder === "завершений"
        );
        setOrders(finishOrders);
        setReqStatus("resolved");
      } catch (err) {
        setReqStatus("rejected");
        toast.error("Not found");
      }
    }
    onFetchOrders();
  }, []);
  return (
    <>
      {reqStatus === "pending" && <Loader />}
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
        {orders && <OrdersList orders={orders} />}
        {orders.length === 0 && <h2>У вас немає завершених замовлень</h2>}
      </Container>
    </>
  );
};

export default OrdersPageFinish;
