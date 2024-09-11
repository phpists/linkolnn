import React from "react";
import { NavLink } from "react-router-dom";

export const Breadcrumbs = ({ links }) => (
  <div className="breadcrumbs">
    {links.map(({ title, link }, i) => (
      <React.Fragment key={i}>
        {i - 1 === links?.length ? (
          <span className="breadcrumbs__item">{title}</span>
        ) : (
          <NavLink to={link} className="breadcrumbs__item">
            {title}
          </NavLink>
        )}
      </React.Fragment>
    ))}
  </div>
);
