export const Search = ({ value, onChange }) => (
  <div class="col col-6 d-flex justify-content-end">
    <div class="search-block">
      <div action="" class="search-block__inner">
        <input
          type="text"
          placeholder="Search everything"
          class="search-block__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div class="search-block__clear" onClick={() => onChange("")}></div>
        <button class="search-block__btn"></button>
      </div>
    </div>
  </div>
);
