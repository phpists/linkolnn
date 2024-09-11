import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Form } from "./Form";

export const ManagerNewAuthor = () => (
  <main class="main-content">
    <div class="container-fluid">
      <Breadcrumbs
        links={[
          { title: "Головна", link: "/" },
          { title: "Автори", link: "/manager-authors" },
          { title: "Додати автора", link: "" },
        ]}
      />
      <h1 class="title-page mb-4">Новий автор</h1>
      <Form />
    </div>
  </main>
);
