import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { Registration } from "./pages/Registration";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ResetPassword } from "./pages/ResetPassword";
import { NewPassword } from "./pages/NewPassword";
import { ResetPasswordSuccess } from "./pages/ResetPasswordSuccess";
import { Dashboard } from "./pages/Dashboard";
import { AboutUs } from "./pages/AboutUs";
import { Prices } from "./pages/Prices";
import { Reviews } from "./pages/Reviews";
import { Promotion } from "./pages/Promotion";
import { Faq } from "./pages/Faq";
import { Order } from "./pages/Order";
import { Profile } from "./pages/Profile/Profile";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { SwaggerPage } from "./pages/SwaggerPage";

function App() {
  const location = useLocation();
  const WITH_OUT_FOOTER = [
    "/login",
    "/registration",
    "/reset-password",
    "/new-password",
    "/new-password-success",
    "/forgot-password",
  ];

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
    handleAddScript("./js/app.min.js", "crmScript");
  };

  useEffect(() => {
    handleAddScripts();
    window.scrollTo({ top: 0 });
  }, [location]);

  useEffect(() => {
    handleAddScripts();
  }, []);

  if (location.pathname === "/swagger") {
    return <SwaggerPage />;
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Registration />} path="/registration" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<ResetPassword />} path="/reset-password" />
        <Route element={<NewPassword />} path="/new-password" />
        <Route
          element={<ResetPasswordSuccess />}
          path="/new-password-success"
        />{" "}
        <Route element={<Dashboard />} path="/" />
        <Route element={<AboutUs />} path="/about-us" />
        <Route element={<Prices />} path="/prices" />
        <Route element={<Reviews />} path="/reviews" />
        <Route element={<Promotion />} path="/promotion" />
        <Route element={<Faq />} path="/faq" />
        <Route element={<Order />} path="/order" />
        <Route element={<Profile />} path="/profile" />
      </Routes>
      {!WITH_OUT_FOOTER.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
