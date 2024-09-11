import { Filters } from "./Filters";
import { Search } from "./Search";

export const Header = () => (
  <div className="row mb-4">
    <Filters />
    <Search />
  </div>
);
