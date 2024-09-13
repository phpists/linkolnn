export const Settings = () => (
  <div class="profile__content">
    <form action="">
      <div class="columns">
        <div class="item input-group wide">
          <label for="old-pass" class="input-label">
            пароль
          </label>
          <div class="input-block">
            <div class="toggle-pass"></div>
            <input type="password" id="old-pass" class="input-line password" />
          </div>
        </div>
        <div class="item input-group">
          <label for="new-pass" class="input-label">
            Новий пароль
          </label>
          <div class="input-block">
            <div class="toggle-pass"></div>
            <input type="password" id="new-pass" class="input-line password" />
          </div>
        </div>
        <div class="item input-group">
          <label for="accept-pass" class="input-label">
            Підтвердіть Новий пароль
          </label>
          <div class="input-block">
            <div class="toggle-pass"></div>
            <input
              type="password"
              id="accept-pass"
              class="input-line password"
            />
          </div>
        </div>
        <div class="item">
          <div class="btn-block">
            <button class="btn">Зберегти</button>
          </div>
        </div>
      </div>
    </form>
  </div>
);
