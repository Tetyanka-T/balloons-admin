import { Container } from "@mui/material";
import CreateComposition from "components/CreateComposition/CreateComposition";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import CompositionsNavigation from "components/NavigationComposition/CompositionsNavigation";

const CreateCompositionPage = () => {
  return (
    <>
      <Header />
      <Container>
        <CompositionsNavigation />
        <CreateComposition />
      </Container>
      <Footer />
    </>
  );
};

export default CreateCompositionPage;
