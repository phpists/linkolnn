import { Header } from "../components/Header";

export const Login = () => {
  return (
    <div class="login-page">
      <div class="login-page__inner">
        <div class="login-block">
          <form action="">
            <h1 class="title-block">Вхід</h1>
            <div class="exist">
              Увійдіть в свій акаунт або <a href="">зарееструйтеся</a>
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
                <div class="toggle-pass"></div>
                <input type="password" id="pass" class="input-line password" />
              </div>
            </div>
            <div class="btn-block">
              <button class="btn">Увійти</button>
              <a href="" class="btn btn-outter__orange btn-without-border">
                Забули пароль?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
