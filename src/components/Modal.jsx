export const Modal = ({ title, onClose }) => (
  <div class="popup">
    <div class="overlay"></div>
    <div class="popup-block">
      <div class="text">{title}</div>
      <div class="btn-block">
        <div
          onClick={onClose}
          class="btn btn-outline-success btn-normal btn-nobg"
        >
          Закрити
        </div>
        <div onClick={onClose} class="btn btn-success btn-normal">
          Видалити
        </div>
      </div>
    </div>
  </div>
);
