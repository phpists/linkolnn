export const OrderCard = ({
  name,
  status,
  type,
  object,
  deadline,
  id,
  price,
}) => (
  <div class="item">
    <div class="info">
      <div class="name">{name}</div>
      <div class={`status ${!status && "end"}`}>
        {status ? "Активний" : "Завершений"}
      </div>
      <ul class="info-list">
        <li>
          <b>{type}</b> / <b>{object}</b>
        </li>
        <li>
          Термін:<b>{deadline}</b>
        </li>
        <li>
          ID:<b>{id}</b>
        </li>
      </ul>
    </div>
    <div class="tech">
      <div class="price">
        Вартість:<b>{price} UAH</b>
      </div>
      <a href="" class="btn btn-outter btn-outter__orange btn-icon__before">
        Support
      </a>
    </div>
  </div>
);
