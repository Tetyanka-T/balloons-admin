import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import HomePage from "pages/HomePage";
import CompositionsPage from "pages/CompositionsPage";
import CardDescription from "components/CardDescription/CardDescription";
import Loader from "components/Loader/Loader";
import OrdersPage from "pages/OrdersPage";
import PrivateRoute from "components/PrivatRoute";
import { authOperations, authSelectors } from "redux/auth";
import OrdersPageNew from "pages/OrdersPageNew";
import OrdersPageInWork from "pages/OrdersPageInWork";
import OrdersPageFinish from "pages/OrdersPageFinish";

function App() {
  const dispatch = useDispatch();

  const isFetchingCurrentAdmin = useSelector(
    authSelectors.getIsFetchCurrentAdmin
  );
  useEffect(() => {
    dispatch(authOperations.currentAdmin());
  }, [dispatch]);
  return (
    !isFetchingCurrentAdmin && (
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route
                exact
                path="/compositions"
                element={<CompositionsPage />}
              />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/orders/new" element={<OrdersPageNew />} />
              <Route path="/orders/inwork" element={<OrdersPageInWork />} />
              <Route path="/orders/finish" element={<OrdersPageFinish />} />
              <Route
                path="compositions/:compositionId"
                element={<CardDescription />}
              />
            </Route>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
        <Toaster position="top-center" />
      </>
    )
  );
}

export default App;
