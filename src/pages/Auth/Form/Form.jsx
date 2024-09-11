import { Copyright } from "./Copyright";
import { Logo } from "./Logo";

export const Form = () => (
  <div className="login-page__inner">
    <Logo />
    <div className="login-block">
      <div className="title text-center">Авторизація</div>
      <form action="">
        <label for="login" className="form-label">
          Пошта
        </label>
        <div className="input-group mb-2">
          <div className="input-block">
            <input
              type="text"
              className="form-control"
              id="login"
              value="forexmple@gmail.com"
            />
          </div>
        </div>
        <label for="password" className="form-label">
          Пароль
        </label>
        <div className="input-group mb-4">
          <div className="input-block">
            <input
              type="password"
              className="form-control password"
              id="password"
              value="UHG87ghHui"
            />
          </div>
          <div className="show-pass"></div>
        </div>
        <div className="text-center">
          <button type="button" className="btn btn-success">
            Увійти
          </button>
        </div>
      </form>
    </div>
    <Copyright />
  </div>
);
