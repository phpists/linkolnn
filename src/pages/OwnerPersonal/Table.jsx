import { useState } from "react";
import { Modal } from "../../components/Modal";

export const Table = ({ data, onToggleSort }) => {
  const [modal, setModal] = useState(false);

  return (
    <div class="table-block mb-5">
      {modal && (
        <Modal
          title="Ви дійсно хочете відалити Працівника?"
          onClose={() => setModal(false)}
        />
      )}
      <table class="table">
        <thead>
          <tr>
            <th class="text-center sort" onClick={onToggleSort}>
              <span>Роль</span>
            </th>
            <th class="text-center">
              <span>ФІО</span>
            </th>
            <th class="text-center">
              <span>Нікнейм</span>
            </th>
            <th class="text-center">
              <span>Телефон</span>
            </th>
            <th class="text-center">
              <span>Телеграм</span>
            </th>
            <th class="text-center">
              <span>Логін</span>
            </th>
            <th class="text-center">
              <span>Пароль</span>
            </th>
            <th class="text-center">
              <span>Банк</span>
            </th>
            <th class="text-center">
              <span>Реквізити</span>
            </th>
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map(
            (
              {
                role,
                name,
                nickname,
                phone,
                telegram,
                login,
                pass,
                mono,
                card,
              },
              i
            ) => (
              <tr>
                <td>
                  <div class={`role ${role === "1" ? "manager" : "author"}`}>
                    {role === "1" ? "Менеджер" : "Автор"}
                  </div>
                </td>
                <td>{name}</td>
                <td>{nickname}</td>
                <td>{phone}</td>
                <td>{telegram}</td>
                <td>{login}</td>
                <td>{pass}</td>
                <td>{mono}</td>
                <td>{card}</td>
                <td class="btn-cell">
                  <button
                    class="delete"
                    onClick={() => setModal(true)}
                  ></button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
