import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Container from "@mui/material/Container";
// import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import OrdersList from "components/OrdersList/OrdersList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderOperations, orderSelectors } from "redux/orders";
// import * as API from "../apiServise/api";

const OrdersPageNew = () => {
  const orders = useSelector(orderSelectors.getOrders);
  // const isLoading = useSelector(orderSelectors.getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderOperations.getOrders());
  }, [dispatch]);

  const newOrder = orders.filter((order) => order.statusOrder === "новий");
  console.log(newOrder);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {/* <OrderNavigation /> */}
        <OrdersList />
      </Container>

      <Footer />
    </>
  );
};

export default OrdersPageNew;
