import { NavLink } from "react-router-dom";

export const AddButton = ({ owner }) => (
  <NavLink
    to={`/${owner ? "owner" : "manager"}-author`}
    className="btn-right"
    style={{ display: "block" }}
  >
    <button class="btn btn-normal btn-success">Додати автора</button>
  </NavLink>
);
