import { Container } from "@mui/material";
import AdminHeader from "components/Header/AdminHeader";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import OrdersList from "components/OrdersList/OrdersList";

const OrdersPageFinish = () => {
  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
      </Container>
    </>
  );
};

export default OrdersPageFinish;
