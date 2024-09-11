import { useEffect, useState } from "react";
import { Tabs } from "./Tabs";
import { ActiveOrders } from "./ActiveOrders";
import { DoneOrders } from "./DoneOrders";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "./Header/Header";
import axios from "axios";

export const MyOrders = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeOrders, setActiveOrders] = useState([]);
  const [doneOrders, setDoneOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/api/active-orders.json")
      .then((resp) => setActiveOrders(resp?.data?.data));

    axios
      .get("/api/done-orders.json")
      .then((resp) => setDoneOrders(resp?.data?.data));
  }, []);

  return (
    <main className="main-content">
      <div className="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "Мої Замовлення", link: "" },
          ]}
        />
        <Tabs active={activeTab} onChange={(t) => setActiveTab(t)} />
        <h1 className="title-page mb-4">Мої Замовлення</h1>
        <Header />
        {activeTab === 0 ? (
          <ActiveOrders data={activeOrders} />
        ) : (
          <DoneOrders data={doneOrders} />
        )}
      </div>
    </main>
  );
};
