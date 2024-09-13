import { NavLink, useLocation } from "react-router-dom";

const LINKS = [
  { title: "Про нас", link: "/about-us" },
  { title: "Ціни", link: "/prices" },
  { title: "Відгуки", link: "/reviews" },
  { title: "Часті запитання", link: "/faq" },
  { title: "Програма лояльності", link: "/promotion" },
];

export const Footer = () => {
  const location = useLocation();

  return (
    <footer class="main-footer">
      <div class="container">
        <div class="main-footer__top">
          <a href="/site_main.html" class="logo">
            <img src="images/logo.svg" alt="" />
          </a>
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
            <div class="btn-block">
              <NavLink to="/registration" className="btn btn-small">
                Реєстрація
              </NavLink>
              <NavLink
                to="/login"
                className="btn btn-small btn-outter btn-outter__light"
              >
                Вхід авторів
              </NavLink>
            </div>
          </div>
          <div class="social-block">
            <div class="title">Соц Мережі</div>
            <ul class="social-block__list">
              <li class="social-block__item">
                <a href="">
                  <img src="images/icons/telegram.svg" alt="" />
                </a>
              </li>
              <li class="social-block__item">
                <a href="">
                  <img src="images/icons/instagram.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="main-footer__bottom">
          <div class="copyright">
            Copyright © 2021 UI8 LLC. All rights reserved
          </div>
          <div class="bottom-menu">
            <a href="">Terms of use</a>
            <a href="">Policy privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
