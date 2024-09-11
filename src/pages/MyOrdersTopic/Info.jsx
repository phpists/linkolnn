export const Info = ({ data }) => (
  <div className="table-block mb-4">
    <table className="table table-without-header table-about">
      <tbody>
        <tr>
          <td>
            <span>ID</span>
            {data?.id}
          </td>
        </tr>
        <tr>
          <td>
            <span>Предмет</span> {data?.topic}
          </td>
        </tr>
        <tr>
          <td>
            <span>Вид роботи</span> {data?.type}
          </td>
        </tr>
        <tr>
          <td>
            <span>Тема роботи</span> {data?.title}
          </td>
        </tr>
        <tr>
          <td>
            <span>Кільк. сторінок</span> {data?.page_count}
          </td>
        </tr>
        <tr>
          <td>
            <span>Унікальність</span> {data?.unique}
          </td>
        </tr>
        <tr>
          <td>
            <span>Гарантійн термін</span> {data?.garantee}
          </td>
        </tr>
        <tr>
          <td>
            <span>Примітка</span> {data?.note}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
