import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { AddButton } from "./AddButton";
import { Header } from "./Header/Header";
import { Table } from "./Table";
import axios from "axios";

export const ManagerAuthors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/manager-authors.json")
      .then((resp) => setData(resp?.data?.data));
  }, []);

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
        <Header />
        <Table data={data} />
      </div>
    </main>
  );
};
