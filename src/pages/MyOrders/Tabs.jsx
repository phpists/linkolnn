const TABS = ["В роботі", "Завершені"];

export const Tabs = ({ active, onChange }) => (
  <div className="inner-menu mb-4">
    {TABS?.map((tab, i) => (
      <div
        key={i}
        className={`item ${active === i && "active"}`}
        onClick={() => onChange(i)}
        style={{ cursor: "pointer" }}
      >
        {tab}
      </div>
    ))}
  </div>
);
