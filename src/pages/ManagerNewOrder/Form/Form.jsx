export const Form = () => (
  <form action="">
    <div class="new-author">
      <div class="new-author__item">
        <label for="client" class="project-data__label">
          Замовник
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="client"
            placeholder="Введіть текст"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="pages" class="project-data__label">
          Кількість сторінок
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="pages"
            placeholder="Введіть текст"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="deadline" class="project-data__label">
          Дедлайн
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="date"
            class="form-control project-data__input"
            id="deadline"
            placeholder="Оберіть пункт"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="pay" class="project-data__label">
          Оплата
        </label>
        <div class="new-author__block">
          <div class="custom-select__wrapper">
            <select
              name=""
              id="pay"
              class="custom-select__input"
              data-minimum-results-for-search="-1"
              data-select2-id="pay"
              data-placeholder="Оберіть пункт"
            >
              <option></option>
              <option value="val2">Очікується</option>
              <option value="val3">Отримана</option>
            </select>
          </div>
        </div>
      </div>
      <div class="new-author__item">
        <label for="lesson" class="project-data__label">
          Предмет
        </label>
        <div class="new-author__block">
          <div class="custom-select__wrapper">
            <select
              name=""
              id="lesson"
              class="custom-select__input"
              data-minimum-results-for-search="-1"
              data-select2-id="lesson"
              data-placeholder="Оберіть пункт"
            >
              <option></option>
              <option value="val2">Очікується</option>
              <option value="val3">Отримана</option>
            </select>
          </div>
        </div>
      </div>
      <div class="new-author__item">
        <label for="comment" class="project-data__label">
          Коментар
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="comment"
            placeholder="Введіть текст"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="worktype" class="project-data__label">
          Вид роботи
        </label>
        <div class="new-author__block">
          <div class="custom-select__wrapper">
            <select
              name=""
              id="worktype"
              class="custom-select__input"
              data-minimum-results-for-search="-1"
              data-select2-id="worktype"
              data-placeholder="Оберіть пункт"
            >
              <option></option>
              <option value="val2">Очікується</option>
              <option value="val3">Отримана</option>
            </select>
          </div>
        </div>
      </div>
      <div class="new-author__item">
        <label for="author" class="project-data__label">
          Обрати автора <span>(опціонально)</span>
        </label>
        <div class="new-author__block">
          <div class="custom-select__wrapper">
            <select
              name=""
              id="author"
              class="custom-select__input"
              data-select2-id="author"
              data-placeholder="Оберіть пункт"
            >
              <option></option>
              <option value="val2">Очікується</option>
              <option value="val3">Отримана</option>
            </select>
          </div>
        </div>
      </div>
      <div class="new-author__item">
        <label for="theme" class="project-data__label">
          Тема
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="theme"
            placeholder="Введіть текст"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="price_author" class="project-data__label">
          Встановити ціну автора <span>(опціонально)</span>
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="price_author"
            placeholder="Введіть текст"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="uniqe" class="project-data__label">
          Унікальність
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="uniqe"
            placeholder="Введіть текст"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="price_client" class="project-data__label">
          Встановити ціну замовника <span>(опціонально)</span>
        </label>
        <div class="new-author__block">
          <div class="clear-btn"></div>
          <input
            type="text"
            class="form-control project-data__input"
            id="price_client"
            placeholder="Введіть текст"
          />
        </div>
      </div>
      <div class="new-author__item">
        <label for="warranty" class="project-data__label">
          Гарантійний термін
        </label>
        <div class="new-author__block">
          <div class="custom-select__wrapper">
            <select
              name=""
              id="warranty"
              class="custom-select__input"
              data-minimum-results-for-search="-1"
              data-select2-id="warranty"
              data-placeholder="Оберіть пункт"
            >
              <option></option>
              <option value="val2">Очікується</option>
              <option value="val3">Отримана</option>
            </select>
          </div>
        </div>
      </div>
      <div class="new-author__item"></div>
      <div class="new-author__item">
        <div class="file-block">
          <div class="name">Дойте файли</div>
          <button class="upload">
            <span>Завантажити</span>
            <input type="file" />
          </button>
          {/* <div class="end-task justify-content-start">
            <div class="info-list">
              <div class="info-list__item">
                <a href="">Методичка1.pdf</a>
              </div>
            </div>
            <button class="delete"></button>
          </div> */}
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
