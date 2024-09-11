export const BurgerButton = ({ onClick, active }) => (
  <button onClick={onClick} className="burgerMenuBtn">
    {active ? (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
            fill="#fff"
          ></path>
        </g>
      </svg>
    ) : (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#fff"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g clip-path="url(#clip0_429_11066)">
            {" "}
            <path
              d="M3 6.00092H21M3 12.0009H21M3 18.0009H21"
              stroke="#fff"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>{" "}
          <defs>
            {" "}
            <clipPath id="clip0_429_11066">
              {" "}
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.000915527)"
              ></rect>{" "}
            </clipPath>{" "}
          </defs>{" "}
        </g>
      </svg>
    )}
  </button>
);
