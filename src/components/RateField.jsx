import { useState } from "react";

export const RateField = ({ title }) => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);

  return (
    <div class="rate underline" onClick={() => setActive(!active)}>
      {active ? (
        <input
          type="number"
          value={value}
          onChange={(e) =>
            Number(e.target.value) > 5 || Number(e.target.value) === 0
              ? null
              : setValue(e.target.value)
          }
          className="noArrows"
          autoFocus
          max={5}
        />
      ) : (
        <div>{value.toString()?.length === 0 ? title : value}</div>
      )}
    </div>
  );
};
