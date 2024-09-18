import { NavLink } from "react-router-dom";

export const Footer = () => (
  <div class="btn-block">
    <NavLink to="/owner-rating" className="btn btn-normal btn-success">
      Підтвердити
    </NavLink>
    <NavLink
      to="/owner-rating"
      className="btn btn-normal btn-nobg btn-red btn-success"
    >
      Відміна
    </NavLink>
  </div>
);
