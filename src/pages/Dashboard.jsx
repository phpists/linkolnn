import { NavLink } from "react-router-dom";

export const Dashboard = () => (
  <div>
    <section class="presentation-block bg-block float-header">
      <div class="container">
        <div class="presentation-block__inner">
          <div class="text-block">
            <h1 class="title-page">
              Lincoln Study – Надійний партнер у досягненні Вашого академічного
              успіху!
            </h1>
            <div class="text">
              Професійна допомога у виконанні дипломних, курсових та інших
              наукових робіт. Ми розуміємо виклики студентського життя та готові
              надати необхідну підтримку для вашого освітнього прогресу.{" "}
            </div>
            <div class="btn-block">
              <NavLink to="/prices" className="btn">
                Дізнатись ціну
              </NavLink>
            </div>
          </div>
          <div class="img-block">
            <img src="images/main-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="why-we">
      <div class="container">
        <div class="why-we__inner">
          <h2 class="title-page center">Чому саме ми?</h2>
          <div class="desc">
            Ваш успіх – наша мета. з Lincoln Study ви отримуєте професійну
            допомогу в навчанні та інвестує у ваше майбутнє.
          </div>
          <div class="why-we__block">
            <div class="why-we__item">
              <div class="icon">
                <img src="images/icons/why-we.svg" alt="" />
              </div>
              <div class="name">Гарантія якості</div>
              <div class="text">
                Кожна робота перевіряється на якість написання та відповідність
                методичних рекомендацій
              </div>
            </div>
            <div class="why-we__item">
              <div class="icon">
                <img src="images/icons/why-we.svg" alt="" />
              </div>
              <div class="name">Найкращі умови</div>
              <div class="text">
                Швидке виконання, відсутність плагіату, персоналізований підхід
              </div>
            </div>
            <div class="why-we__item">
              <div class="icon">
                <img src="images/icons/why-we.svg" alt="" />
              </div>
              <div class="name">Експертна допомога</div>
              <div class="text">
                Досвідчені фахівці готові виконати складний проект та зберегти
                Ваш час
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
