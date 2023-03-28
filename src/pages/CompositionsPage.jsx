import { Container } from "@mui/material";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import CompositionsNavigation from "components/NavigationComposition/CompositionsNavigation";

const CompositionsPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CompositionsNavigation />
      </Container>
      <Footer />
    </>
  );
};

export default CompositionsPage;
