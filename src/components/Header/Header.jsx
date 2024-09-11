import { useEffect, useState } from "react";
import { NavLinks } from "./NavLinks/NavLinks";
import { Profile } from "./Profile/Profile";
import { BurgerButton } from "./BurgerButton";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-9">
            <NavLinks />
          </div>
          <div className="col col-3 d-flex justify-content-end">
            <Profile />
            <BurgerButton
              onClick={() => setMobileMenu(!mobileMenu)}
              active={mobileMenu}
            />
          </div>
        </div>
      </div>
      {mobileMenu ? (
        <div className="navbar-mobile-menu">
          {" "}
          <NavLinks />
        </div>
      ) : null}
    </nav>
  );
};
