export const ForgotPassword = () => (
  <div class="login-page">
    <div class="login-page__inner">
      <div class="login-block">
        <form action="">
          <h1 class="title-block">Забули свій пароль?</h1>
          <div class="exist">
            Введіть адресу електронної пошти, пов’язану з вашим обліковим
            записом, і ми надішлемо вам посилання для зміни пароля.{" "}
          </div>
          <div class="input-group">
            <label for="email" class="input-label">
              E mail
            </label>
            <div class="input-block">
              <input type="text" id="email" class="input-line" />
            </div>
          </div>
          <div class="btn-block">
            <button class="btn">Відправити</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
