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
  const [filters, setFilters] = useState({ topic: "", type: "", search: "" });

  const handleChangeFilter = (field, value) =>
    setFilters({ ...filters, [field]: value });

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
        <Header
          data={activeTab === 0 ? activeOrders : doneOrders}
          filters={filters}
          onChangeFilters={handleChangeFilter}
        />
        {activeTab === 0 ? (
          <ActiveOrders
            data={activeOrders
              ?.filter((v) =>
                filters?.topic?.length > 0 ? v?.topic === filters?.topic : true
              )
              ?.filter((v) =>
                filters?.type?.length > 0 ? v?.type === filters?.type : true
              )
              ?.filter((v) =>
                filters?.search?.length > 0
                  ? v?.topic
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.type
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.name
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.page_count
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.unique
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.price
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.garantee
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.note
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase())
                  : true
              )}
          />
        ) : (
          <DoneOrders
            data={doneOrders
              ?.filter((v) =>
                filters?.topic?.length > 0 ? v?.topic === filters?.topic : true
              )
              ?.filter((v) =>
                filters?.type?.length > 0 ? v?.type === filters?.type : true
              )
              ?.filter((v) =>
                filters?.search?.length > 0
                  ? v?.topic
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.type
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.name
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.page_count
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.unique
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.price
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase()) ||
                    v?.garantee
                      ?.toLowerCase()
                      .includes(filters?.search?.toLowerCase())
                  : true
              )}
          />
        )}
      </div>
    </main>
  );
};
