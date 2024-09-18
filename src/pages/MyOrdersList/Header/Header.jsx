import { Filters } from "./Filters";
import { Search } from "./Search";

export const Header = ({ data, filters, onChangeFilters }) => (
  <div className="row mb-4">
    <Filters data={data} filters={filters} onChangeFilters={onChangeFilters} />
    <Search
      value={filters?.search}
      onChange={(val) => onChangeFilters("search", val)}
    />
  </div>
);
