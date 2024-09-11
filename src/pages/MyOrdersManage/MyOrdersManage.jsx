import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "./Footer";
import { Info } from "./Info";
import { Table } from "./Table";
import axios from "axios";

export const MyOrdersManage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/api/order-manage.json").then((resp) => setData(resp?.data));
  }, []);

  return (
    <main className="main-content">
      <div className="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "Мої Замовлення", link: "/my-orders" },
            { title: "В роботі", link: "/my-orders" },
            { title: "Управілення замовленням", link: "" },
          ]}
        />
        <Info data={data} />
        <Table data={data?.files} />
        <Footer />
      </div>
    </main>
  );
};
