export const Files = ({ files }) => (
  <div className="info-list">
    {files?.map(({ name, link }, i) => (
      <div className="info-list__item" key={i}>
        <a href={link} download>
          {name}
        </a>
      </div>
    ))}
  </div>
);
