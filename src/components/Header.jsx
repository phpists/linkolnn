import { NavLink } from "react-router-dom";

export const Header = () => {
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
