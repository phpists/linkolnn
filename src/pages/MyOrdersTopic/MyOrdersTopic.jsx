import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Files } from "./Files";
import { Info } from "./Info";
import axios from "axios";

export const MyOrdersTopic = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/api/order-topic.json").then((resp) => setData(resp?.data));
  }, []);

  return (
    <main className="main-content">
      <div className="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "Список всіх замовлень", link: "/" },
            { title: "Тема роботи", link: "" },
          ]}
        />
        <Info data={data} />
        <Files files={data?.files} />
      </div>
    </main>
  );
};
