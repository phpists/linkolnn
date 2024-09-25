import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "./Header/Header";
import { Table } from "./Table";
import axios from "axios";

export const ManagerInProccess = ({ owner }) => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ topic: "", type: "", search: "" });

  const handleChangeFilter = (field, value) =>
    setFilters({ ...filters, [field]: value });

  useEffect(() => {
    axios
      .get("/api/manager-in-proccess.json")
      .then((resp) => setData(resp?.data?.data));
  }, []);

  return (
    <main class="main-content">
      <div class="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "В роботі", link: "" },
          ]}
        />
        <h1 class="title-page mb-4">В роботі</h1>
        <Header
          data={data}
          filters={filters}
          onChangeFilters={handleChangeFilter}
        />
        <Table
          owner={owner}
          data={data
            ?.filter((v) =>
              filters?.topic?.length > 0 ? v?.topic === filters?.topic : true
            )
            ?.filter((v) =>
              filters?.type?.length > 0 ? v?.type === filters?.type : true
            )
            ?.filter((v) =>
              filters?.search?.length > 0
                ? v?.customer
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.topic
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.type
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.name
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
                  v?.author
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.price
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.authorPrice
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.discount
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.note
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase())
                : true
            )}
        />
      </div>
    </main>
  );
};
