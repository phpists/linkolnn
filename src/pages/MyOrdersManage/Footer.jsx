import { NavLink } from "react-router-dom";

export const Footer = () => (
  <div className="btn-block">
    <NavLink to="/my-orders" className="btn btn-normal btn-success">
      Завершити проект
    </NavLink>
    <NavLink
      to="/my-orders"
      className="btn btn-nobg btn-icon btn-icon__cancel btn-red btn-success"
    >
      Скасувати проект
    </NavLink>
  </div>
);
