import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { AddButton } from "./AddButton";
import { Header } from "./Header/Header";
import { Table } from "./Table";
import axios from "axios";

export const ManagerAuthors = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ topic: "", type: "", search: "" });
  const [sort, setSort] = useState(false);
  const [activeSort, setActiveSort] = useState("done");

  const handleChangeFilter = (field, value) =>
    setFilters({ ...filters, [field]: value });

  useEffect(() => {
    axios
      .get("/api/manager-authors.json")
      .then((resp) => setData(resp?.data?.data));
  }, []);

  const handleToggleSort = (type) => {
    setSort(activeSort === type ? !sort : false);
    setActiveSort(type);
  };

  return (
    <main class="main-content">
      <div class="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "Автори", link: "" },
          ]}
        />
        <AddButton />
        <h1 class="title-page mb-4">Автори</h1>
        <Header
          data={data}
          filters={filters}
          onChangeFilters={handleChangeFilter}
        />
        <Table
          onToggleSort={(type) => handleToggleSort(type)}
          data={data
            ?.sort((a, b) =>
              sort
                ? Number(a?.[activeSort]) - Number(b?.[activeSort])
                : Number(b?.[activeSort]) - Number(a?.[activeSort])
            )
            ?.filter((v) =>
              filters?.topic?.length > 0 ? v?.topic === filters?.topic : true
            )
            ?.filter((v) =>
              filters?.type?.length > 0 ? v?.type === filters?.type : true
            )
            ?.filter((v) =>
              filters?.search?.length > 0
                ? v?.name
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.nickname
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.phone
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.telegram
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.rate
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.done
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.canceled
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.inProgress
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase())
                : true
            )}
        />
      </div>
    </main>
  );
};
