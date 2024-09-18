import { NavLink } from "react-router-dom";

export const Prices = () => (
  <div>
    <section class="price-block wide bg-block float-header">
      <div class="container">
        <div class="price-block__inner">
          <div class="badge">Ціни</div>
          <div class="price-block__list">
            <div class="price-block__item">
              <div class="name">Реферат</div>
              <span class="show-more">Переглянути умови</span>
              <div class="info">
                <div class="block">
                  <div class="icon-text value">Об’єм</div>
                  <div class="info-text">від 10 сторінок</div>
                </div>
                <div class="block">
                  <div class="free-materials">Безкоштовні матеріали</div>
                  <ul class="list">
                    <li>План</li>
                    <li>Звіт про унікальність</li>
                  </ul>
                </div>
                <div class="block">
                  <div class="icon-text time">Термін</div>
                  <div class="info-text">від 2-х днів</div>
                </div>
              </div>
              <div class="price">
                <span>від</span>
                200
                <b>грн</b>
              </div>
              <NavLink to="/order" className="btn">
                Замовити
              </NavLink>
            </div>
            <div class="price-block__item">
              <div class="name">Курсова робота</div>
              <span class="show-more">Переглянути умови</span>
              <div class="info">
                <div class="block">
                  <div class="icon-text value">Об’єм</div>
                  <div class="info-text">від 30 сторінок</div>
                </div>
                <div class="block">
                  <div class="free-materials">Безкоштовні матеріали</div>
                  <ul class="list">
                    <li>План</li>
                    <li>Звіт про унікальність</li>
                  </ul>
                </div>
                <div class="block">
                  <div class="icon-text time">Термін</div>
                  <div class="info-text">від 2-х днів</div>
                </div>
              </div>
              <div class="price">
                <span>від</span>
                800
                <b>грн</b>
              </div>
              <NavLink to="/order" className="btn">
                Замовити
              </NavLink>
            </div>
            <div class="price-block__item">
              <div class="name">Дипломна робота</div>
              <span class="show-more">Переглянути умови</span>
              <div class="info">
                <div class="block">
                  <div class="icon-text value">Об’єм</div>
                  <div class="info-text">від 50 сторінок</div>
                </div>
                <div class="block">
                  <div class="free-materials">Безкоштовні матеріали</div>
                  <ul class="list">
                    <li>План</li>
                    <li>Звіт про унікальність</li>
                  </ul>
                </div>
                <div class="block">
                  <div class="icon-text time">Термін</div>
                  <div class="info-text">від 2-х днів</div>
                </div>
              </div>
              <div class="price">
                <span>від</span>
                4000
                <b>грн</b>
              </div>
              <NavLink to="/order" className="btn">
                Замовити
              </NavLink>
            </div>
            <div class="price-block__item">
              <div class="name">Звіт з практики</div>
              <span class="show-more">Переглянути умови</span>
              <div class="info">
                <div class="block">
                  <div class="icon-text value">Об’єм</div>
                  <div class="info-text">від 25 сторінок</div>
                </div>
                <div class="block">
                  <div class="free-materials">Безкоштовні матеріали</div>
                  <ul class="list">
                    <li>План</li>
                    <li>Звіт про унікальність</li>
                  </ul>
                </div>
                <div class="block">
                  <div class="icon-text time">Термін</div>
                  <div class="info-text">від 2-х днів</div>
                </div>
              </div>
              <div class="price">
                <span>від</span>
                800
                <b>грн</b>
              </div>
              <NavLink to="/order" className="btn">
                Замовити
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="warranty">
      <div class="container">
        <div class="warranty__inner">
          <h2 class="title-page">Гарантії</h2>
          <div class="desc">
            У Lincoln Study ми надаємо високоякісні освітні послуги, виконані з
            дотриманням всіх стандартів академічної доброчесності. Щоб вас
            переконати – зроби перше замовлення без передоплати!
          </div>
          <div class="warranty__block">
            <div class="warranty__item">
              <div class="name">Задоволені клієнти</div>
              <div class="text">
                Більше 1000 задоволених клієнтів, які стали постійними!
              </div>
            </div>
            <div class="warranty__item">
              <div class="name">Підтримка до захисту</div>
              <div class="text">
                Широкий спектр послуг до моменту Вашого захисту
              </div>
            </div>
            <div class="warranty__item">
              <div class="name">Висока якість</div>
              <div class="text">
                Кожна робота проходить ретельну перевірку нашими фахівцями.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="stocks wide bg-block">
      <div class="container">
        <div class="stocks__inner">
          <div class="text-block">
            <h2 class="title-page">Не забувай про наші акції</h2>
            <div class="text">
              У Lincoln Study ми цінуємо кожного нашого клієнта та розуміємо
              важливість доступного освітнього сервісу. Ми регулярно проводимо
              акції та спеціальні пропозиції, щоб зробити наші послуги ще більш
              доступними. Слідкуйте за нашими оновленнями, щоб не упустити
              можливість скористатися вигідними пропозиціями!
            </div>
            <div class="btn-block">
              <a href="" class="btn btn-orange btn-icon">
                Перейти до акціїї
              </a>
            </div>
          </div>
          <div class="img-block">
            <img src="images/stocks-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  </div>
);
