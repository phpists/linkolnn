import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "./Header/Header";
import { Pagination } from "../../components/Pagination";
import { Table } from "./Table";
import { useEffect, useState } from "react";
import axios from "axios";

export const MyOrdersList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/my-orders.json").then((resp) => setData(resp?.data?.data));
  }, []);

  return (
    <main className="main-content">
      <div className="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "Список всіх замовлень", link: "" },
          ]}
        />
        <h1 className="title-page mb-4">Список всіх замовлень</h1>
        <Header />
        <Table data={data} />
        <Pagination />
      </div>
    </main>
  );
};
