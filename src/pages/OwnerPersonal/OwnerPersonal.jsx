import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "./Header/Header";
import { Table } from "./Table";
import axios from "axios";

export const OwnerPersonal = () => {
  const [data, setData] = useState([]);

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
        <Header />
        <Table data={data} />
      </div>
    </main>
  );
};
