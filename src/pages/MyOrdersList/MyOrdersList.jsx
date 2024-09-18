import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "./Header/Header";
import { Pagination } from "../../components/Pagination";
import { Table } from "./Table";
import { useEffect, useState } from "react";
import axios from "axios";

export const MyOrdersList = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ topic: "", type: "", search: "" });

  const handleChangeFilter = (field, value) =>
    setFilters({ ...filters, [field]: value });

  useEffect(() => {
    axios.get("/api/my-orders.json").then((resp) => setData(resp?.data?.data));
  }, []);

  console.log(filters);
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
        <Header
          data={data}
          filters={filters}
          onChangeFilters={handleChangeFilter}
        />
        <Table
          data={data
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
                  v?.garantee
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.readyToDo
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.note
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase())
                : true
            )}
        />
        <Pagination />
      </div>
    </main>
  );
};
