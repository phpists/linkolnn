import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Info } from "./Info";
import { Table } from "./Table";
import axios from "axios";

export const Rating = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/api/rating.json").then((resp) => setData(resp?.data));
  }, []);

  console.log(data);

  return (
    <main className="main-content">
      <div className="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "Рейтинг", link: "" },
          ]}
        />
        <h1 className="title-page mb-4">Рейтинг</h1>
        <Info data={data} />
        <Table data={data?.history ?? []} />
      </div>
    </main>
  );
};
