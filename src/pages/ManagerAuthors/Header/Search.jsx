export const Search = ({ value, onChange }) => (
  <div className="d-flex justify-content-end">
    <div className="search-block">
      <div action="" className="search-block__inner">
        <input
          type="text"
          placeholder="Search everything"
          className="search-block__input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="search-block__clear" onClick={() => onChange("")}></div>
        <button className="search-block__btn"></button>
      </div>
    </div>
  </div>
);
