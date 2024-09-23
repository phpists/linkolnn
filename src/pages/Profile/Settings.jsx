import { useState } from "react";

export const Settings = () => {
  const [showPassowords, setShowPasswords] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const handleToggleShowPassword = (type) =>
    setShowPasswords({ ...showPassowords, [type]: !showPassowords?.[type] });

  return (
    <div class="profile__content">
      <form action="">
        <div class="columns">
          <div class="item input-group wide">
            <label for="old-pass" class="input-label">
              пароль
            </label>
            <div class="input-block">
              <div
                class={`toggle-pass ${showPassowords.old && "active"}`}
                onClick={() => handleToggleShowPassword("old")}
              ></div>
              <input
                type={showPassowords.old ? "text" : "password"}
                id="pass"
                class="input-line password"
              />
            </div>
          </div>
          <div class="item input-group">
            <label for="new-pass" class="input-label">
              Новий пароль
            </label>
            <div class="input-block">
              <div
                class={`toggle-pass ${showPassowords.new && "active"}`}
                onClick={() => handleToggleShowPassword("new")}
              ></div>
              <input
                type={showPassowords.new ? "text" : "password"}
                id="pass"
                class="input-line password"
              />
            </div>
          </div>
          <div class="item input-group">
            <label for="accept-pass" class="input-label">
              Підтвердіть Новий пароль
            </label>
            <div class="input-block">
              <div
                class={`toggle-pass ${showPassowords.confirm && "active"}`}
                onClick={() => handleToggleShowPassword("confirm")}
              ></div>
              <input
                type={showPassowords.confirm ? "text" : "password"}
                id="pass"
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
};
