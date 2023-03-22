import { Container } from "@mui/material";
import ChangeComposition from "components/ChangeComposition/ChangeComposition";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import CompositionsNavigation from "components/NavigationComposition/CompositionsNavigation";

const ChangeCompositionPage = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CompositionsNavigation change="Змінити композицію" />
        <ChangeComposition />
      </Container>
      <Footer />
    </>
  );
};

export default ChangeCompositionPage;
