import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import OrderNavigation from "components/OrderNavigation/OrderNavigation";
import OrdersList from "components/OrdersList/OrdersList";

const OrdersPageFinish = () => {
  return (
    <>
      <Header />
      <OrderNavigation />
      <OrdersList />
      <Footer />
    </>
  );
};

export default OrdersPageFinish;
