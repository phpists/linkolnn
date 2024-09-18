export const getUniqueValues = (array, key) => {
  let values = [];

  array.forEach((element) => {
    if (!values.includes(element?.[key])) {
      values.push(element?.[key]);
    }
  });

  return values;
};
