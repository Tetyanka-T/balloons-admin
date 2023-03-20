import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Container from "@mui/material/Container";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import OrdersList from "components/OrdersList/OrdersList";

const OrdersPageNew = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <OrderNavigation />
        <OrdersList />
      </Container>

      {/* <Footer /> */}
    </>
  );
};

export default OrdersPageNew;
