import { NavLink } from "react-router-dom";

export const AddButton = () => (
  <div class="col col-6">
    <NavLink to="/owner-new-personal" className="btn btn-normal btn-success">
      Додати працівника
    </NavLink>
  </div>
);
