export const Info = ({ data }) => (
  <div className="project-info">
    <div className="item">
      <span>ID</span> {data?.id}
    </div>
    <div className="item">
      <span>Вид роботи</span>
      {data?.type}
    </div>
    <div className="item">
      <span>Тема роботи</span> {data?.name}
    </div>
    <div className="item">
      <span>Кільк. сторінок</span> {data?.page_count}
    </div>
  </div>
);
