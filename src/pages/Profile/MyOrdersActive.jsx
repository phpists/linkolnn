import { OrderCard } from "./OrderCard";

export const MyOrdersActive = ({ data }) => (
  <div class="profile__content">
    <div class="mobile-title">Мої замовлення | Активні</div>
    <div class="profile__order">
      {data?.map(({ name, status, type, object, deadline, id, price }, i) => (
        <OrderCard
          key={i}
          name={name}
          status={status}
          type={type}
          object={object}
          deadline={deadline}
          id={id}
          price={price}
        />
      ))}
    </div>
  </div>
);
