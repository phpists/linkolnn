export const Sidebar = ({ activeTab, onChangeTab }) => (
  <div class="profile__sidebar">
    <div class="inner">
      <div class="top">
        <div class="avatar">
          <span>
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                id="Vector"
                d="M3 6L10.5 6"
                stroke="#FCFCFD"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Vector"
                d="M5.08 20.24C5.83 19.09 6.85 18.15 8.06 17.49C9.27 16.84 10.62 16.5 11.99 16.5C13.37 16.5 14.72 16.84 15.93 17.49C17.14 18.15 18.16 19.09 18.91 20.24"
                stroke="#FCFCFD"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
              <path
                id="Vector"
                d="M12 9L3 6L12 3L21 6L12 9Z"
                stroke="#FCFCFD"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
              />
              <path
                id="Vector"
                d="M15.87 7.7C16.55 8.45 17.01 9.39 17.18 10.39C17.34 11.4 17.21 12.43 16.8 13.36C16.39 14.29 15.72 15.09 14.86 15.64C14.01 16.2 13.01 16.5 12 16.5C10.98 16.5 9.98 16.2 9.13 15.64C8.27 15.09 7.6 14.29 7.19 13.36C6.78 12.43 6.65 11.4 6.81 10.39C6.98 9.39 7.44 8.45 8.12 7.7"
                stroke="#FCFCFD"
                stroke-opacity="1.000000"
                stroke-width="2.000000"
                stroke-linejoin="round"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </div>
        <div class="info">
          <div class="name">Ірина Шевченко</div>
          <div class="status">Студент</div>
        </div>
      </div>
      <ul class="menu-profile">
        <li class={`menu-profile__item ${activeTab === 0 && "active"}`}>
          <a
            href="/profile"
            class="menu-profile__link"
            onClick={(e) => {
              e.preventDefault();
              onChangeTab(0);
            }}
          >
            <span class="icon">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  id="Vector"
                  d="M5.33 8.66L12 12L18.66 8.66L12 5.33L5.33 8.66Z"
                  stroke="#23262F"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M5.33 15.33L12 18.66L18.66 15.33"
                  stroke="#23262F"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M5.33 12L12 15.33L18.66 12"
                  stroke="#23262F"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            Мої замовлення
          </a>
          <ul class="menu-profile">
            <li class={`menu-profile__item ${activeTab === 1 && "active"}`}>
              <a
                href="/profile"
                class="menu-profile__link"
                onClick={(e) => {
                  e.preventDefault();
                  onChangeTab(1);
                }}
              >
                <span class="icon">
                  <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      id="Vector"
                      d="M18.13 14.59C17.71 15.59 17.05 16.48 16.2 17.16C15.36 17.85 14.36 18.32 13.29 18.53C12.22 18.74 11.12 18.69 10.08 18.38C9.03 18.06 8.08 17.5 7.31 16.73C6.53 15.97 5.96 15.02 5.63 13.98C5.31 12.95 5.24 11.84 5.44 10.77C5.64 9.7 6.1 8.7 6.78 7.84C7.45 6.99 8.33 6.32 9.33 5.88"
                      stroke="#23262F"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                    <path
                      id="Vector"
                      d="M18.15 9.44C17.82 8.63 17.33 7.9 16.71 7.28C16.09 6.66 15.36 6.17 14.55 5.84C13.74 5.5 12.87 5.33 12 5.33L12 12L18.66 12C18.66 11.12 18.49 10.25 18.15 9.44Z"
                      stroke="#23262F"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                Активні
                <span class="count">12</span>
              </a>
            </li>
            <li class={`menu-profile__item ${activeTab === 2 && "active"}`}>
              <a
                href="/profile"
                class="menu-profile__link"
                onClick={(e) => {
                  e.preventDefault();
                  onChangeTab(2);
                }}
              >
                <span class="icon">
                  <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <path
                      id="Vector"
                      d="M6 5.6C6 5.44 6.05 5.29 6.15 5.17C6.26 5.06 6.4 5 6.54 5L17.45 5C17.59 5 17.73 5.06 17.84 5.17C17.94 5.29 18 5.44 18 5.6L18 10.08C18 16.48 13.13 18.6 12.17 18.96C12.06 19.01 11.93 19.01 11.82 18.96C10.86 18.6 6 16.48 6 10.08L6 5.6Z"
                      stroke="#23262F"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector"
                      d="M15 10L10.99 14L9 12"
                      stroke="#23262F"
                      stroke-opacity="1.000000"
                      stroke-width="1.500000"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                Звершені
                <span class="count">1</span>
              </a>
            </li>
          </ul>
        </li>
        <li class={`menu-profile__item ${activeTab === 3 && "active"}`}>
          <a
            href="/profile"
            class="menu-profile__link"
            onClick={(e) => {
              e.preventDefault();
              onChangeTab(3);
            }}
          >
            <span class="icon">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  id="Vector"
                  d="M17.33 18L17.33 16.66C17.33 15.95 17.05 15.28 16.55 14.78C16.05 14.28 15.37 14 14.66 14L9.33 14C8.62 14 7.94 14.28 7.44 14.78C6.94 15.28 6.66 15.95 6.66 16.66L6.66 18"
                  stroke="#23262F"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M12 11.33C10.52 11.33 9.33 10.13 9.33 8.66C9.33 7.19 10.52 6 12 6C13.47 6 14.66 7.19 14.66 8.66C14.66 10.13 13.47 11.33 12 11.33Z"
                  stroke="#23262F"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Мій акаунт
          </a>
        </li>
        <li class={`menu-profile__item ${activeTab === 4 && "active"}`}>
          <a
            href="/profile"
            class="menu-profile__link"
            onClick={(e) => {
              e.preventDefault();
              onChangeTab(4);
            }}
          >
            <span class="icon">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  id="Vector"
                  d="M12 14C10.89 14 10 13.1 10 12C10 10.89 10.89 10 12 10C13.1 10 14 10.89 14 12C14 13.1 13.1 14 12 14Z"
                  stroke="#23262F"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M16.85 14.64C16.89 14.85 16.99 15.05 17.15 15.21L17.19 15.25C17.31 15.37 17.41 15.52 17.48 15.68C17.54 15.84 17.58 16.02 17.58 16.19C17.58 16.37 17.54 16.54 17.48 16.7C17.41 16.86 17.31 17.01 17.19 17.14C17.06 17.26 16.92 17.36 16.76 17.42C16.59 17.49 16.42 17.53 16.25 17.53C16.07 17.53 15.9 17.49 15.73 17.42C15.57 17.36 15.43 17.26 15.3 17.14L15.26 17.1C15.1 16.94 14.91 16.84 14.69 16.8C14.47 16.76 14.25 16.79 14.05 16.87C13.85 16.96 13.68 17.1 13.56 17.28C13.45 17.46 13.38 17.67 13.38 17.88L13.38 18C13.38 18.35 13.24 18.69 12.99 18.94C12.74 19.19 12.4 19.33 12.05 19.33C11.69 19.33 11.36 19.19 11.11 18.94C10.86 18.69 10.72 18.35 10.72 18L10.72 17.94C10.71 17.71 10.64 17.5 10.51 17.32C10.38 17.14 10.2 17 10 16.93C9.79 16.84 9.57 16.81 9.35 16.85C9.14 16.89 8.94 16.99 8.78 17.15L8.74 17.19C8.62 17.31 8.47 17.41 8.31 17.48C8.15 17.54 7.97 17.58 7.8 17.58C7.62 17.58 7.45 17.54 7.29 17.48C7.13 17.41 6.98 17.31 6.86 17.19C6.73 17.06 6.63 16.92 6.57 16.76C6.5 16.59 6.46 16.42 6.46 16.25C6.46 16.07 6.5 15.9 6.57 15.73C6.63 15.57 6.73 15.43 6.86 15.3L6.9 15.26C7.05 15.1 7.15 14.91 7.19 14.69C7.23 14.47 7.2 14.25 7.12 14.05C7.03 13.85 6.89 13.68 6.71 13.56C6.53 13.45 6.32 13.38 6.11 13.38L6 13.38C5.64 13.38 5.3 13.24 5.05 12.99C4.8 12.74 4.66 12.4 4.66 12.05C4.66 11.69 4.8 11.36 5.05 11.11C5.3 10.86 5.64 10.72 6 10.72L6.06 10.72C6.28 10.71 6.49 10.64 6.67 10.51C6.85 10.38 6.99 10.2 7.06 10C7.15 9.79 7.18 9.57 7.14 9.35C7.1 9.14 7 8.94 6.84 8.78L6.8 8.74C6.68 8.62 6.58 8.47 6.51 8.31C6.45 8.15 6.41 7.97 6.41 7.8C6.41 7.62 6.45 7.45 6.51 7.29C6.58 7.13 6.68 6.98 6.8 6.86C6.93 6.73 7.07 6.63 7.23 6.57C7.4 6.5 7.57 6.46 7.75 6.46C7.92 6.46 8.09 6.5 8.26 6.57C8.42 6.63 8.56 6.73 8.69 6.86L8.73 6.9C8.89 7.05 9.09 7.15 9.3 7.19C9.52 7.23 9.74 7.2 9.94 7.12L10 7.12C10.19 7.03 10.36 6.89 10.48 6.71C10.6 6.53 10.66 6.32 10.66 6.11L10.66 6C10.66 5.64 10.8 5.3 11.05 5.05C11.3 4.8 11.64 4.66 12 4.66C12.35 4.66 12.69 4.8 12.94 5.05C13.19 5.3 13.33 5.64 13.33 6L13.33 6.06C13.33 6.27 13.39 6.48 13.51 6.66C13.63 6.84 13.8 6.98 14 7.06C14.2 7.15 14.42 7.18 14.64 7.14C14.85 7.1 15.05 7 15.21 6.84L15.25 6.8C15.37 6.68 15.52 6.58 15.68 6.51C15.84 6.45 16.02 6.41 16.19 6.41C16.37 6.41 16.54 6.45 16.7 6.51C16.86 6.58 17.01 6.68 17.14 6.8C17.26 6.93 17.36 7.07 17.42 7.23C17.49 7.4 17.53 7.57 17.53 7.75C17.53 7.92 17.49 8.09 17.42 8.26C17.36 8.42 17.26 8.56 17.14 8.69L17.1 8.73C16.94 8.89 16.84 9.09 16.8 9.3C16.76 9.52 16.79 9.74 16.88 9.94L16.88 10C16.96 10.19 17.1 10.36 17.28 10.48C17.46 10.6 17.67 10.66 17.88 10.66L18 10.66C18.35 10.66 18.69 10.8 18.94 11.05C19.19 11.3 19.33 11.64 19.33 12C19.33 12.35 19.19 12.69 18.94 12.94C18.69 13.19 18.35 13.33 18 13.33L17.94 13.33C17.72 13.33 17.51 13.39 17.33 13.51C17.15 13.63 17.01 13.8 16.93 14C16.84 14.2 16.81 14.42 16.85 14.64Z"
                  stroke="#23262F"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            Пароль
          </a>
        </li>
        <li class={`menu-profile__item`}>
          <a href="" class="menu-profile__link">
            <span class="icon">
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  id="Vector"
                  d="M10 18L7.33 18C6.97 18 6.64 17.85 6.39 17.6C6.14 17.35 6 17.02 6 16.66L6 7.33C6 6.97 6.14 6.64 6.39 6.39C6.64 6.14 6.97 6 7.33 6L10 6"
                  stroke="#D31510"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M14.66 15.33L18 11.99L14.66 8.66"
                  stroke="#D31510"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M18 12L10 12"
                  stroke="#D31510"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            Вийти
          </a>
        </li>
      </ul>
    </div>
  </div>
);
