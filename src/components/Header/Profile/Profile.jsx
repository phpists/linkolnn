import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Profile = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("/api/profile.json").then((resp) => setData(resp?.data));
  }, []);

  return (
    <div className="dropdown">
      <button
        className="navbar-user"
        type="button"
        data-bs-config='{"autoClose": "outside"}'
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="avatar">
          <img
            src={`images/crm/${
              pathname?.includes("manager")
                ? "manager-avatar"
                : pathname?.includes("owner")
                ? "owner-avatar"
                : "avatar"
            }.svg`}
            alt=""
          />
        </div>
        <div className="icon"></div>
        <div className="info">
          <div className="name">Valera228</div>
          <div className="type">
            {pathname?.includes("manager")
              ? "Manager"
              : pathname?.includes("owner")
              ? "Owner"
              : "Author"}
          </div>
        </div>
      </button>
      <div className="dropdown-menu user-dropdown">
        <div className="user-modal">
          <div className="user-modal__top">
            <div className="user-modal__title">Мій профіль</div>
            <div className="user-modal__type">
              {" "}
              {pathname?.includes("manager")
                ? "Менеджер"
                : pathname?.includes("owner")
                ? "Власник"
                : "Автор"}
            </div>
          </div>
          <div className="user-modal__content">
            <div className="user-modal__row">
              <div className="user-modal__cell">ФІО</div>
              <div className="user-modal__cell">{data?.name}</div>
            </div>
            <div className="user-modal__row">
              <div className="user-modal__cell">Нікнейм</div>
              <div className="user-modal__cell">{data?.nickname}</div>
            </div>
            <div className="user-modal__row">
              <div className="user-modal__cell">Телефон</div>
              <div className="user-modal__cell">{data?.phone}</div>
            </div>
            <div className="user-modal__row">
              <div className="user-modal__cell">Телеграм</div>
              <div className="user-modal__cell">{data?.telegram}</div>
            </div>
            <div className="user-modal__row">
              <div className="user-modal__cell">Login</div>
              <div className="user-modal__cell">{data?.login}</div>
            </div>
            <div className="user-modal__row">
              <div className="user-modal__cell">Пароль</div>
              <div className="user-modal__cell">{data?.pass}</div>
            </div>
            <div className="user-modal__row">
              <div className="user-modal__cell">Банк</div>
              <div className="user-modal__cell">{data?.bank}</div>
            </div>
            <div className="user-modal__row">
              <div className="user-modal__cell">Реквізити</div>
              <div className="user-modal__cell">{data?.card}</div>
            </div>
          </div>
          <div className="user-modal__footer">
            <a href="" className="exit">
              Вихід
            </a>
            <div className="close">Закрити</div>
          </div>
        </div>
      </div>
    </div>
  );
};
