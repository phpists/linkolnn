import { NavLink } from "react-router-dom";

export const Footer = () => (
  <footer class="main-footer">
    <div class="container">
      <div class="main-footer__top">
        <a href="/site_main.html" class="logo">
          <img src="images/logo.svg" alt="" />
        </a>
        <div class="menu-block">
          <ul class="menu-block__list">
            <li class="menu-block__item active">
              <NavLink to="/about-us">Про нас</NavLink>
            </li>
            <li class="menu-block__item">
              <NavLink to="/prices">Ціни</NavLink>
            </li>
            <li class="menu-block__item">
              <NavLink to="/reviews">Відгуки</NavLink>
            </li>
            <li class="menu-block__item">
              <NavLink to="/faq">Часті запитання</NavLink>
            </li>
            <li class="menu-block__item">
              <NavLink to="/promotion">Програма лояльності</NavLink>
            </li>
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
