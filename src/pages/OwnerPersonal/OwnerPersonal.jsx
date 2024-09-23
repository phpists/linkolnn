import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "./Header/Header";
import { Table } from "./Table";
import axios from "axios";

export const OwnerPersonal = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  const handleChangeSearch = (val) => setSearch(val);

  useEffect(() => {
    axios
      .get("/api/owner-personal.json")
      .then((resp) => setData(resp?.data?.data));
  }, []);

  return (
    <main class="main-content">
      <div class="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "Персонал", link: "" },
          ]}
        />
        <h1 class="title-page mb-4">Персонал</h1>
        <Header search={search} onChangeSearch={handleChangeSearch} />
        <Table
          onToggleSort={() => setSort(!sort)}
          data={data
            ?.sort((a, b) =>
              sort
                ? Number(a?.role) - Number(b?.role)
                : Number(b?.role) - Number(a?.role)
            )
            ?.filter((v) =>
              search?.length > 0
                ? v?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
                  v?.nickname?.toLowerCase()?.includes(search?.toLowerCase()) ||
                  v?.phone?.toLowerCase()?.includes(search?.toLowerCase()) ||
                  v?.telegram?.toLowerCase()?.includes(search?.toLowerCase()) ||
                  v?.login?.toLowerCase()?.includes(search?.toLowerCase()) ||
                  v?.pass?.toLowerCase()?.includes(search?.toLowerCase()) ||
                  v?.mono?.toLowerCase()?.includes(search?.toLowerCase()) ||
                  v?.card?.toLowerCase()?.includes(search?.toLowerCase())
                : true
            )}
        />
      </div>
    </main>
  );
};
