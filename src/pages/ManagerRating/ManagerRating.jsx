import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "./Header/Header";
import { Table } from "./Table";
import axios from "axios";

export const ManagerRating = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ topic: "", type: "", search: "" });

  const handleChangeFilter = (field, value) =>
    setFilters({ ...filters, [field]: value });

  useEffect(() => {
    axios
      .get("/api/manage-rating.json")
      .then((resp) => setData(resp?.data?.data));
  }, []);

  return (
    <main class="main-content">
      <div class="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "На оцінці", link: "" },
          ]}
        />
        <div class="btn-right">
          <a href="/manager-order" class="btn btn-normal btn-success">
            Створити замовлення
          </a>
        </div>

        <h1 class="title-page mb-4">На оцінці</h1>
        <Header
          data={data}
          filters={filters}
          onChangeFilters={handleChangeFilter}
        />
        <Table data={data} />
      </div>
    </main>
  );
};
