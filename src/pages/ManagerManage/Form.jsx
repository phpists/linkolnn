export const Form = () => (
  <div class="project-data">
    <div class="block">
      <div class="item">
        <label for="price" class="project-data__label">
          Ціна для замовника
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="price"
          defaultValue="1000"
        />
      </div>
      <div class="item">
        <label for="comment" class="project-data__label">
          Комментар
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="comment"
          defaultValue="лишив коментар"
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
            <option value="val2">Очікується</option>
            <option value="val3">50%</option>
            <option value="val4">100%</option>
          </select>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="item">
        <label for="author" class="project-data__label">
          Автор
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="author"
          placeholder="Оберіть автора"
          disabled
        />
      </div>
      <div class="item">
        <label for="price_author" class="project-data__label">
          Ціна автора
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="price_author"
          placeholder="Оберіть автора"
          disabled
        />
      </div>
      <div class="item">
        <label for="warranty" class="project-data__label">
          Гарантій термін
        </label>
        <input
          type="text"
          class="form-control project-data__input"
          id="warranty"
          placeholder="Оберіть автора"
          disabled
        />
      </div>
    </div>
  </div>
);
