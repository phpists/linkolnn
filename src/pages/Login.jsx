import { NavLink } from "react-router-dom";
import { Header } from "../components/Header";
import { useState } from "react";

export const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div class="login-page">
      <div class="login-page__inner">
        <div class="login-block">
          <form action="">
            <h1 class="title-block">Вхід</h1>
            <div class="exist">
              Увійдіть в свій акаунт або{" "}
              <NavLink to="/registration">зарееструйтеся</NavLink>
            </div>
            <div class="input-group">
              <label for="email" class="input-label">
                E mail
              </label>
              <div class="input-block">
                <input type="text" id="email" class="input-line" />
              </div>
            </div>
            <div class="input-group">
              <label for="pass" class="input-label">
                пароль
              </label>
              <div class="input-block">
                <div
                  class={`toggle-pass ${showPass && "active"}`}
                  onClick={() => setShowPass(!showPass)}
                ></div>
                <input
                  type={showPass ? "text" : "password"}
                  id="pass"
                  class="input-line password"
                />
              </div>
            </div>
            <div class="btn-block">
              <NavLink to="/profile" className="btn">
                Увійти
              </NavLink>
              <NavLink
                to="/forgot-password"
                className="btn btn-outter__orange btn-without-border"
              >
                Забули пароль?
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
