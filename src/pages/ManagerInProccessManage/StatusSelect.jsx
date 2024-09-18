import { useState } from "react";
import { Alert } from "../../components/Alert/Alert";

export const StatusSelect = () => {
  const [alert, setAlert] = useState(false);

  const handleShowAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  };

  return (
    <div class="change-status mb-4">
      {alert && <Alert title="Успішно оновлено" />}
      <label for="status" class="project-data__label">
        Перевести статус
      </label>
      <div class="change-status__inner d-flex align-items-end">
        <div class="custom-select__wrapper">
          <select
            name=""
            id="status"
            class="custom-select__input"
            data-minimum-results-for-search="-1"
            data-select2-id="status"
          >
            <option></option>
            <option value="val2">В роботі</option>
            <option value="val3">В роботі</option>
          </select>
        </div>
        <button
          class="btn btn-outline-success btn-normal"
          onClick={handleShowAlert}
        >
          Оновити
        </button>
      </div>
    </div>
  );
};
