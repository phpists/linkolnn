import { Banner } from "./Banner";
import { Form } from "./Form/Form";

export const Auth = () => (
  <div className="container-fluid login-page">
    <div className="row">
      <div className="col col-7">
        <Form />
      </div>
      <Banner />
    </div>
  </div>
);
