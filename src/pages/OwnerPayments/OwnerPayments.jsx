import { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Header } from "./Header/Header";
import { Table } from "./Table";
import axios from "axios";

export const OwnerPayments = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ id: "", paid: "", search: "" });

  const handleChangeFilter = (field, value) =>
    setFilters({ ...filters, [field]: value });

  useEffect(() => {
    axios
      .get("/api/owner-payments.json")
      .then((resp) => setData(resp?.data?.data));
  }, []);

  return (
    <main class="main-content">
      <div class="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "Виплати", link: "" },
          ]}
        />
        <h1 class="title-page mb-4">Таблиця виплат</h1>
        <Header
          data={data}
          filters={filters}
          onChangeFilters={handleChangeFilter}
        />
        <Table
          data={data
            ?.filter((v) =>
              filters?.id?.length > 0 ? v?.id === filters?.id : true
            )
            ?.filter((v) =>
              filters?.paid?.length > 0 ? v?.paid === filters?.paid : true
            )
            ?.filter((v) =>
              filters?.search?.length > 0
                ? v?.customer
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.manager
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.author
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.done
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.price
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.authorPrice
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.paid
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.garentee
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.endGarantee
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.profit
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase()) ||
                  v?.card
                    ?.toLowerCase()
                    .includes(filters?.search?.toLowerCase())
                : true
            )}
        />
      </div>
    </main>
  );
};
