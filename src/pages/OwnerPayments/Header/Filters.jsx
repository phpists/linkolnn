import { Select } from "../../../components/Select";
import { getUniqueValues } from "../../../helpers/helpers";

export const Filters = ({ data, filters, onChangeFilters }) => {
  return (
    <div className="col col-6">
      <div className="filter-block">
        <div className="icon"></div>
        <div
          className="select-block"
          onClick={(e) =>
            onChangeFilters("topic", e.currentTarget.children?.[0]?.value)
          }
        ></div>
        <div className="select-block">
          <Select
            name="test"
            className="custom-select custom-select__filter"
            placeholder="Виплата"
            id="worktype"
            value={filters?.paid}
            options={["Так", "Ні"]}
            onChange={(v) => onChangeFilters("paid", v)}
          />
        </div>
      </div>
    </div>
  );
};
