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
        >
          <Select
            name="test"
            className="custom-select custom-select__filter"
            placeholder="ID"
            id="lessonn"
            value={filters?.id}
            options={getUniqueValues(data, "id")}
            onChange={(v) => onChangeFilters("id", v)}
          />
        </div>
        <div className="select-block">
          <Select
            name="test"
            className="custom-select custom-select__filter"
            placeholder="Виплата"
            id="worktype"
            value={filters?.paid}
            options={getUniqueValues(data, "paid")}
            onChange={(v) => onChangeFilters("paid", v)}
          />
        </div>
      </div>
    </div>
  );
};
