import axios from "axios";

export const Order = () => (
  <section class="order bg-block float-header">
    <div class="container">
      <div class="order__inner">
        <h1 class="title-page">Замовити</h1>
        <div class="block">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.target);

              // Do a bit of work to convert the entries to a plain JS object
              const value = Object.fromEntries(data.entries());

              axios.post("/test", value);
            }}
          >
            <div class="reg-text">Зареєструйтеся щоб дізнатись вартість</div>
            <div class="icon-text">У вас діє знижка на це замодення 20%</div>
            <div class="block__inner">
              <div class="item">
                <label for="worktype" class="form-label">
                  Вид роботи
                </label>
                <select
                  name="worktype"
                  id="worktype"
                  class="custom-select"
                  data-minimum-results-for-search="-1"
                  data-placeholder="Оберіть варіант"
                  data-select2-id="worktype"
                >
                  <option value=""></option>
                  <option value="lesson1">Курсова робота</option>
                  <option value="lesson1">Реферат</option>
                  <option value="lesson1">Диплом</option>
                </select>
              </div>
              <div class="item">
                <label for="deadline" class="form-label">
                  Дедлайн
                </label>
                <select
                  name="deadline"
                  id="deadline"
                  class="custom-select"
                  data-minimum-results-for-search="-1"
                  data-placeholder="Оберіть варіант"
                  data-select2-id="deadline"
                >
                  <option value=""></option>
                  <option value="lesson1">Курсова робота</option>
                  <option value="lesson1">Реферат</option>
                  <option value="lesson1">Диплом</option>
                </select>
              </div>
              <div class="item">
                <label for="lesson" class="form-label">
                  Предмет
                </label>
                <select
                  name="lesson"
                  id="lesson"
                  class="custom-select"
                  data-minimum-results-for-search="-1"
                  data-placeholder="Оберіть варіант"
                  data-select2-id="lesson"
                >
                  <option value=""></option>
                  <option value="lesson1">Економіка</option>
                  <option value="lesson1">Право</option>
                  <option value="lesson1">Економіка</option>
                </select>
              </div>
              <div class="item">
                <label for="warranty" class="form-label">
                  Гарантійний термін
                </label>
                <select
                  name="warranty"
                  id="warranty"
                  class="custom-select"
                  data-minimum-results-for-search="-1"
                  data-placeholder="Оберіть варіант"
                  data-select2-id="warranty"
                >
                  <option value=""></option>
                  <option value="lesson1">Курсова робота</option>
                  <option value="lesson1">Реферат</option>
                  <option value="lesson1">Диплом</option>
                </select>
              </div>
              <div class="item wide">
                <label for="count" class="form-label">
                  Кількість сторінок
                </label>
                <input
                  name="count"
                  type="text"
                  class="input-line input-line__small"
                  id="count"
                  placeholder="Введіть термін"
                />
              </div>
              <div class="item wide">
                <label for="theme" class="form-label">
                  Тема
                </label>
                <input
                  type="text"
                  class="input-line input-line__small"
                  id="theme"
                  name="theme"
                  placeholder="Введіть термін"
                />
              </div>
              <div class="item wide">
                <label for="contact" class="form-label">
                  Телефон / Телеграм
                  <div class="info-block">
                    <div class="icon"></div>
                    <div class="inner">
                      Подумать как компактно разместить на одной странице, кишки
                      не нужно. Футер можно подвинуть, но чтобы это не была
                      длинно, если получится на одной странице
                    </div>
                  </div>
                </label>
                <input
                  type="text"
                  class="input-line input-line__small"
                  id="contact"
                  name="contact"
                  placeholder="Введіть номер або нікнейм"
                />
              </div>
              <div class="item wide">
                <label for="uniq-text" class="form-label">
                  Унікальність роботи
                  <div class="custom-switcher">
                    <input type="checkbox" class="switcher-order" id="uniq" />
                    <label for="uniq"></label>
                  </div>
                </label>
                <div class="warn">
                  *Унікальність роботи не має значення і я розумію наслідки
                </div>
                <div class="input-hidden">
                  <input
                    type="text"
                    class="input-line input-line__small"
                    id="uniq-text"
                    name="uniq"
                    placeholder="Введіть відсоток"
                  />
                </div>
              </div>
              <div class="item wide">
                <div class="load-file">
                  <div class="icon-text">Прикріпіть файл</div>
                  <div class="require">(файли PDF, WORD, EXL, до 250мб)</div>
                </div>
                <div class="file-list">
                  <div class="file-list__item">
                    <div class="name">Файл врод бла бла 123</div>
                    <button class="del"></button>
                  </div>
                  <div class="file-list__item">
                    <div class="name">Файл врод бла бла 123</div>
                    <button class="del"></button>
                  </div>
                  <div class="file-list__item">
                    <div class="name">Файл врод бла бла 123</div>
                    <button class="del"></button>
                  </div>
                  <div class="file-list__item">
                    <div class="name">Файл врод бла бла 123</div>
                    <button class="del"></button>
                  </div>
                </div>
              </div>
              <div class="item wide">
                <textarea
                  name="note"
                  id=""
                  class="textarea-line"
                  placeholder="Коментар про додаткові вимоги (не обов’язково)"
                ></textarea>
              </div>
              <div class="item wide">
                <div class="custom-checkbox">
                  <input type="checkbox" id="agree" name="agree" />
                  <label for="agree">
                    Я даю згоду на обробку своїх персональних даних у
                    відповідності з політикою конфіденційності та приймаю умови
                    договору публічної оферти
                  </label>
                </div>
              </div>
              <div class="btn-block">
                <button class="btn">Розрахувати вартість</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
