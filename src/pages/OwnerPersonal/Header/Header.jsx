import { AddButton } from "./AddButton";
import { Search } from "./Search";

export const Header = ({ search, onChangeSearch }) => (
  <div class="row mb-4">
    <AddButton />
    <Search value={search} onChange={onChangeSearch} />
  </div>
);
