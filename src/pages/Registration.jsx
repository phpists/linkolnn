import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Registration = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div class="login-page">
      <div class="login-page__inner">
        <div class="login-block">
          <form action="">
            <h1 class="title-block">Реєстрація</h1>
            <div class="exist">
              Вже є аккаунт? <NavLink to="/login">Увійти</NavLink>
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
            <div class="or">
              <span>Або</span>
            </div>
            <a href="" class="google">
              <img src="images/icons/google.png" alt="" />
              Війти за допомою <span>Google</span>
            </a>
            <div class="btn-block">
              <button class="btn">Продовжити</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
