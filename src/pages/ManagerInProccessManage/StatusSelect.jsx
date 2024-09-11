export const StatusSelect = () => (
  <div class="change-status mb-4">
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
      <button class="btn btn-outline-success btn-normal">Оновити</button>
    </div>
  </div>
);
