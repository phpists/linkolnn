import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Form } from "./Form/Form";

export const ManagerNewOrder = () => (
  <main class="main-content">
    <div class="container-fluid">
      <Breadcrumbs
        links={[
          { title: "Головна", link: "/" },
          { title: "На оцінці", link: "/manager-rating" },
          { title: "Створити замовлення", link: "" },
        ]}
      />
      <h1 class="title-page mb-4">Нове замовлення</h1>
      <Form />
    </div>
  </main>
);
