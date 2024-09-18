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
            placeholder="Предмет"
            id="lessonn"
            value={filters?.topic}
            options={getUniqueValues(data, "topic")}
            onChange={(v) => onChangeFilters("topic", v)}
          />
        </div>
        <div className="select-block">
          <Select
            name="test"
            className="custom-select custom-select__filter"
            placeholder="Вид роботи"
            id="worktype"
            value={filters?.type}
            options={getUniqueValues(data, "type")}
            onChange={(v) => onChangeFilters("type", v)}
          />
        </div>
      </div>
    </div>
  );
};
