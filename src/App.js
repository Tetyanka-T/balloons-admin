import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "pages/HomePage";
import CompositionsPage from "pages/CompositionsPage";
import OrdersPage from "pages/OrdersPage";
import CardDescription from "components/CardDescription/CardDescription";
import Loader from "components/Loader/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/compositions" element={<CompositionsPage />} />

        <Route path="/orders" element={<OrdersPage />} />

        <Route
          path="compositions/:compositionId"
          element={<CardDescription />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
