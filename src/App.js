import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer";
import { MyOrdersList } from "./pages/MyOrdersList/MyOrdersList";
import { MyOrdersTopic } from "./pages/MyOrdersTopic/MyOrdersTopic";
import { MyOrders } from "./pages/MyOrders/MyOrders";
import { MyOrdersManage } from "./pages/MyOrdersManage/MyOrdersManage";
import { Rating } from "./pages/Rating/Rating";
import { Instructions } from "./pages/Instructions/Instructions";
import { useEffect } from "react";
import { ManagerRating } from "./pages/ManagerRating/ManagerRating";
import { ManagerManage } from "./pages/ManagerManage/ManagerManage";
import { ManagerInProccess } from "./pages/ManagerInProccess/ManagerInProccess";
import { ManagerInProccessManage } from "./pages/ManagerInProccessManage/ManagerInProccessManage";
import { ManagerAuthors } from "./pages/ManagerAuthors/ManagerAuthors";
import { ManagerNewAuthor } from "./pages/ManagerNewAuthor/ManagerNewAuthor";
import { ManagerNewOrder } from "./pages/ManagerNewOrder/ManagerNewOrder";
import { OwnerPayments } from "./pages/OwnerPayments/OwnerPayments";
import { OwnerIncome } from "./pages/OwnerIncome/OwnerIncome";
import { OwnerPersonal } from "./pages/OwnerPersonal/OwnerPersonal";
import { NewPersonal } from "./pages/NewPersonal/NewPersonal";
import { Alert } from "./components/Alert/Alert";
import { SwaggerPage } from "./pages/SwaggerPage";

function App() {
  const location = useLocation();

  const handleAddScript = (src, id) => {
    const isExist = document.querySelector(`#${id}`);
    if (isExist) {
      isExist.remove();
    }
    const body = document.querySelector("body");
    const script = document.createElement("script");
    script.src = src;
    script.id = id;
    body.appendChild(script);
  };

  const handleAddScripts = () => {
    handleAddScript("js/crm.min.js", "crmScript");
  };

  useEffect(() => {
    handleAddScripts();
  }, [location]);

  useEffect(() => {
    handleAddScripts();
  }, []);

  return (
    <div className="app-wrapper">
      <Routes>
        <Route element={<Auth />} path="/auth" />
        <Route element={<SwaggerPage />} path="/swagger" />
        <Route
          path="*"
          element={
            <>
              <div>
                <Header />
                <Routes>
                  <Route element={<MyOrdersList />} path="/" />
                  <Route element={<MyOrdersTopic />} path="/my-orders-topic" />
                  <Route element={<MyOrders />} path="/my-orders" />
                  <Route
                    element={<MyOrdersManage />}
                    path="/my-orders-manage"
                  />
                  <Route element={<Rating />} path="/rating" />
                  <Route element={<Instructions />} path="/instructions" />
                  <Route element={<ManagerRating />} path="/manager-rating" />
                  <Route element={<ManagerManage />} path="/manager-manage" />
                  <Route
                    element={<ManagerInProccess />}
                    path="/manager-in-proccess"
                  />{" "}
                  <Route
                    element={<ManagerInProccessManage />}
                    path="/manager-in-proccess-manage"
                  />
                  <Route element={<ManagerAuthors />} path="/manager-authors" />
                  <Route
                    element={<ManagerNewAuthor />}
                    path="/manager-author"
                  />
                  <Route element={<ManagerNewOrder />} path="/manager-order" />
                  <Route element={<OwnerPayments />} path="/owner-payments" />
                  <Route element={<OwnerIncome />} path="/owner-income" />
                  <Route element={<OwnerPersonal />} path="/owner-personal" />
                  <Route element={<NewPersonal />} path="/owner-new-personal" />
                  <Route element={<ManagerRating />} path="/owner-rating" />
                  <Route
                    element={<ManagerInProccess />}
                    path="/owner-in-proccess"
                  />{" "}
                  <Route element={<ManagerAuthors />} path="/owner-authors" />
                </Routes>
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
