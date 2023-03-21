import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "pages/HomePage";
import CompositionsPage from "pages/CompositionsPage";
import CreateCompositionPage from "pages/CreateCompositionPage";
import CardDescription from "components/CardDescription/CardDescription";
import Loader from "components/Loader/Loader";
import OrdersPageNew from "pages/OrdersPageNew";
import OrdersPageInWork from "pages/OrdersPageInWork";
import OrdersPageFinish from "pages/OrdersPageFinish";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/compositions" element={<CompositionsPage />} />
        <Route
          exact
          path="/compositions/create"
          element={<CreateCompositionPage />}
        />
        <Route path="/orders/new" element={<OrdersPageNew />} />
        <Route path="/orders/in-work" element={<OrdersPageInWork />} />
        <Route path="/orders/finish" element={<OrdersPageFinish />} />

        <Route
          path="compositions/:compositionId"
          element={<CardDescription />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
