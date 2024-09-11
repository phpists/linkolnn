import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { StatusSelect } from "./StatusSelect";
import { Table } from "./Table";
import axios from "axios";

export const ManagerInProccessManage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("/api/manager-in-proccess-manage.json")
      .then((resp) => setData(resp?.data));
  }, []);

  return (
    <main class="main-content">
      <div class="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "На оцінці", link: "/manager-rating" },
            { title: "Управілення", link: "" },
          ]}
        />
        <StatusSelect />
        <Table data={data?.files} />
        <Form data={data} />
        <Footer />
      </div>
    </main>
  );
};
