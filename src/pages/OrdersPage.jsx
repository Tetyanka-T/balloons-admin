import Footer from "components/Footer/Footer";
import Container from "@mui/material/Container";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import AdminHeader from "components/Header/AdminHeader";

const OrdersPage = () => {
  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">
        <OrderNavigation />
      </Container>
      <Footer />
    </>
  );
};

export default OrdersPage;
