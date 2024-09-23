import { useState } from "react";

export const NewPassword = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div class="login-page">
      <div class="login-page__inner">
        <div class="login-block">
          <form action="">
            <h1 class="title-block">Скиньте свій пароль</h1>
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
              <div class="info">Мінімум 6 символів</div>
            </div>
            <div class="btn-block">
              <button class="btn">Продовжити</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
