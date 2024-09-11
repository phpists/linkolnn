import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Form } from "./Form/Form";

export const NewPersonal = () => (
  <main class="main-content">
    <div class="container-fluid">
      <Breadcrumbs
        links={[
          { title: "Головна", link: "/" },
          { title: "Персонал", link: "" },
        ]}
      />
      <h1 class="title-page mb-4">Новий працівник</h1>
      <Form />
    </div>
  </main>
);
