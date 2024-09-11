export const Form = ({ data }) => (
  <div class="project-data">
    <div class="block">
      <div class="item">
        <label for="id" class="project-data__label">
          ID
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="id"
          value={data?.id}
          disabled
        />
      </div>
      <div class="item">
        <label for="client" class="project-data__label">
          Замовник
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="client"
          value={data?.customer}
          disabled
        />
      </div>
      <div class="item">
        <label for="author" class="project-data__label">
          Автор
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="author"
          value={data?.author}
          disabled
        />
      </div>
      <div class="item">
        <label for="theme" class="project-data__label">
          Тема
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="theme"
          value={data?.name}
          disabled
        />
      </div>
    </div>
    <div class="block">
      <div class="item">
        <label for="comment" class="project-data__label">
          Комментар
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="comment"
          placeholder="Введіть текст"
        />
      </div>
      <div class="item">
        <label for="pay" class="project-data__label">
          Оплата
        </label>
        <div class="custom-select__wrapper">
          <select
            name=""
            id="pay"
            class="custom-select__input"
            data-minimum-results-for-search="-1"
            data-select2-id="pay"
          >
            <option></option>
            <option value="val2" selected>
              Очікується
            </option>
            <option value="val3">Отримана</option>
          </select>
        </div>
      </div>
      <div class="item">
        <label for="sale" class="project-data__label">
          Знижка
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="sale"
          placeholder="Введіть текст"
        />
      </div>
    </div>
  </div>
);
