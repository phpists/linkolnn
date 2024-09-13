import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { useEffect, useState } from "react";
import { MyOrders } from "./MyOrders";
import { MyOrdersActive } from "./MyOrdersActive";
import { Info } from "./Info";
import { Settings } from "./Settings";
import axios from "axios";

export const Profile = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeActiveTab = (val) => setActiveTab(val);

  useEffect(() => {
    axios.get("/api/orders.json").then((resp) => setData(resp?.data?.data));
  }, []);

  return (
    <section class="profile bg-block float-header">
      <div class="container">
        <div class="profile__inner">
          <Sidebar activeTab={activeTab} onChangeTab={handleChangeActiveTab} />
          {activeTab === 0 ? (
            <MyOrders data={data} />
          ) : activeTab === 1 || activeTab === 2 ? (
            <MyOrdersActive data={data} />
          ) : activeTab === 3 ? (
            <Info />
          ) : activeTab === 4 ? (
            <Settings />
          ) : null}
        </div>
      </div>
    </section>
  );
};
