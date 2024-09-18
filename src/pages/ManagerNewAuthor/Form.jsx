export const Form = () => (
  <form action="">
    <div class="new-author">
      <div class="new-author__item">
        <label for="name" class="project-data__label">
          ФІО
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="name"
            value="Іванов Іван Іванович"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="login" class="project-data__label">
          Логін
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="login"
            placeholder="Введіть логін під яким буде авторизований автор"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="nick" class="project-data__label">
          Нікнейм
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="nick"
            placeholder="Введіть персональний нікнейм для автора"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="pass" class="project-data__label">
          Пароль
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="pass"
            placeholder="Введіть пароль"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="tg" class="project-data__label">
          Телеграм
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="tg"
            placeholder="Введіть телеграм автора"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="bank" class="project-data__label">
          Банк
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="bank"
            placeholder="Введіть назву банку"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="phone" class="project-data__label">
          Телефон
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="phone"
            placeholder="Введіть номер телефону"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="card" class="project-data__label">
          Реквізити оплати
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="card"
            placeholder="Введіть реквізити для оплати"
          />
        </div>
      </div>
    </div>
    <div class="btn-block">
      <button class="btn btn-normal btn-success">Створити</button>
      <button class="btn btn-normal btn-nobg btn-red btn-success">
        Відміна
      </button>
    </div>
  </form>
);
