import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Header } from "./Header/Header";
import { Table } from "./Table";
import axios from "axios";

export const ManagerManage = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ topic: "", type: "", search: "" });

  const handleChangeFilter = (field, value) =>
    setFilters({ ...filters, [field]: value });

  useEffect(() => {
    axios
      .get("/api/manager-manage.json")
      .then((resp) => setData(resp?.data?.data));
  }, []);

  return (
    <main class="main-content">
      <div class="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "На оцінці", link: "/manager-rating" },
            { title: "Управілення замовленням", link: "" },
          ]}
        />
        <h1 class="title-page mb-4">ID 1</h1>
        <Header
          data={data}
          filters={filters}
          onChangeFilters={handleChangeFilter}
        />
        <Table
          data={data?.filter((v) =>
            filters?.search?.length > 0
              ? v?.author
                  ?.toLowerCase()
                  .includes(filters?.search?.toLowerCase()) ||
                v?.inProgress
                  ?.toLowerCase()
                  .includes(filters?.search?.toLowerCase()) ||
                v?.rate
                  ?.toLowerCase()
                  .includes(filters?.search?.toLowerCase()) ||
                v?.price?.toLowerCase().includes(filters?.search?.toLowerCase())
              : true
          )}
        />
        <Form />
        <Footer />
      </div>
    </main>
  );
};
