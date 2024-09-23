import axios from "axios";
import { useEffect, useState } from "react";

export const Info = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/api/profile.json").then((resp) => setData(resp?.data));
  }, []);

  return (
    <div class="profile__content">
      <div class="req">*Обов’язкові</div>
      <form action="">
        <div class="columns">
          <div class="item input-group">
            <label for="name" class="input-label bold with-help">
              П.І.Б
            </label>
            <div class="input-block">
              <input
                type="text"
                id="name"
                class="input-line"
                defaultValue={data?.name}
              />
            </div>
          </div>
          <div class="item input-group">
            <label for="phone" class="input-label bold with-help">
              Номер телнфону
              <div class="info-block">
                <div class="icon"></div>
                <div class="inner">
                  Подумать как компактно разместить на одной странице, кишки не
                  нужно. Футер можно подвинуть, но чтобы это не была длинно,
                  если получится на одной странице
                </div>
              </div>
            </label>
            <div class="input-block">
              <div class="prefix">+3 80</div>
              <input
                type="text"
                id="name"
                class="input-line"
                defaultValue={data?.phone}
              />
            </div>
          </div>
          <div class="item input-group">
            <label for="email" class="input-label bold with-help">
              Email
            </label>
            <div class="input-block">
              <div class="prefix email"></div>
              <input
                type="text"
                id="email"
                class="input-line"
                defaultValue={data?.email}
              />
            </div>
          </div>
          <div class="item input-group">
            <label for="tg" class="input-label bold with-help">
              Телеграм
              <div class="info-block">
                <div class="icon"></div>
                <div class="inner">
                  Подумать как компактно разместить на одной странице, кишки не
                  нужно. Футер можно подвинуть, но чтобы это не была длинно,
                  если получится на одной странице
                </div>
              </div>
            </label>
            <div class="input-block">
              <div class="prefix tg"></div>
              <input
                type="text"
                id="tg"
                class="input-line"
                defaultValue={data?.telegram}
              />
            </div>
          </div>
          <div class="item input-group">
            <label for="univer" class="input-label bold with-help">
              Вуз
            </label>
            <div class="input-block">
              <input
                type="text"
                id="univer"
                class="input-line"
                defaultValue={data?.university}
              />
            </div>
          </div>
          <div class="item input-group">
            <label for="course" class="input-label bold with-help">
              Курс
            </label>
            <div class="input-block">
              <input
                type="text"
                id="course"
                class="input-line"
                defaultValue={data?.course}
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
