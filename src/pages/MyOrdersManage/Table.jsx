export const Table = ({ data }) => (
  <div className="table-block mb-3">
    <table className="table table-layout-fixed">
      <thead>
        <tr>
          <th className="text-center">
            <span>
              Файли замовника <br />
              (без редагування)
            </span>
          </th>
          <th className="text-center">
            <span>
              Правки <br />
              (без редагування)
            </span>
          </th>
          <th className="text-center">
            <span>Завершити замовлення</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ file1, file2, file3, step }, i) => (
          <tr key={i}>
            <td>
              {file1?.name ? (
                <div className="info-list">
                  <div className="info-list__item">
                    <a href={file1?.link} download>
                      {file1?.name}
                    </a>
                  </div>
                </div>
              ) : null}
            </td>
            <td>
              {file2?.name ? (
                <div className="info-list">
                  <div className="info-list__item">
                    <a href={file1?.link} download>
                      {file2?.name}
                    </a>
                  </div>
                </div>
              ) : null}
            </td>
            <td>
              <div className="end-task">
                <span>
                  {step === "1"
                    ? "1. Прев’ю"
                    : step === "2"
                    ? "2. Повна робота"
                    : step === "3"
                    ? "3. Звіта з плагіату"
                    : "4. План"}
                </span>
                {step === "1" ? (
                  <>
                    {" "}
                    <div className="info-list">
                      <div className="info-list__item">
                        <a href={file3?.link} download>
                          {file3?.name}
                        </a>
                      </div>
                    </div>
                    <button className="delete"></button>
                  </>
                ) : (
                  <button className="upload">
                    <span>Заваантажити</span>
                  </button>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
