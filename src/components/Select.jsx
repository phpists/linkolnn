import { useEffect, useRef } from "react";

export const Select = ({
  name,
  className,
  placeholder,
  id,
  options,
  value,
  onChange,
}) => {
  const selectRef = useRef(null);

  useEffect(() => {
    let checkValue = setInterval(() => {
      const updatedValue = selectRef.current.value;
      if (updatedValue !== value) {
        console.log("change");
        onChange(updatedValue);
      }
    }, 500);

    return () => clearInterval(checkValue);
  }, [selectRef, value]);

  return (
    <select
      name={name}
      id=""
      className={className}
      data-placeholder={placeholder}
      data-select2-id={id}
      value={value}
      ref={selectRef}
    >
      <option value=""></option>
      {options?.map((v, key) => (
        <option key={key} name={v}>
          {v}
        </option>
      ))}
    </select>
  );
};
