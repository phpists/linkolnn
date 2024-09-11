export const Alert = ({ title, error }) => (
  <div class="notification-block">
    <div class={`notification-block__item ${error && "red"}`}>
      <div class="icon">
        <img
          src={
            error
              ? "images/crm/icon/notification_error.svg"
              : "images/crm/icon/notification_ok.svg"
          }
          alt=""
        />
      </div>
      {title}
    </div>
  </div>
);
