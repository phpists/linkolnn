import { NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { title: "Про нас", link: "/about-us" },
  { title: "Ціни", link: "/prices" },
  { title: "Відгуки", link: "/reviews" },
  { title: "Часті запитання", link: "/faq" },
  { title: "Програма лояльності", link: "/promotion" },
];

export const Header = () => {
  const location = useLocation();

  return (
    <header class="main-header">
      <div class="container">
        <div class="main-header__inner">
          <div class="logo-block">
            <NavLink to="/" className="logo">
              <img src="images/logo.svg" alt="" />
            </NavLink>
          </div>
          <div class="divider"></div>
          <div class="menu-block">
            <ul class="menu-block__list">
              {LINKS?.map(({ title, link }) => (
                <li
                  class={`menu-block__item ${
                    location?.pathname === link && "active"
                  }`}
                >
                  <NavLink to={link}>{title}</NavLink>
                </li>
              ))}
            </ul>
            <div class="social-block">
              <ul class="social-block__list">
                <li class="social-block__item">
                  <a href="">
                    <span class="icon">
                      <img src="images/icons/instagram.svg" alt="" />
                    </span>
                    Instagram
                  </a>
                </li>
                <li class="social-block__item">
                  <a href="">
                    <span class="icon">
                      <img src="images/icons/telegram.svg" alt="" />
                    </span>
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="right-block">
            <ul class="social-list">
              <li class="social-list__item">
                <a href="">
                  <img src="images/icons/telegram.svg" alt="" />
                </a>
              </li>
              <li class="social-list__item">
                <a href="">
                  <img src="images/icons/instagram.svg" alt="" />
                </a>
              </li>
            </ul>
            <NavLink to="/order" className="btn btn-small mobile-btn">
              Замовити
            </NavLink>
            <NavLink to="/registration" className="btn btn-small btn-outter">
              Реєстрація{" "}
            </NavLink>
          </div>
          <button class="mobile-menu"></button>
        </div>
      </div>
    </header>
  );
};
