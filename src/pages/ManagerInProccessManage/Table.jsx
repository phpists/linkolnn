const STEPS = [
  "",
  "1. Прев’ю",
  "2. Повна робота",
  "3. План",
  "4. Звіт з плагіату",
];

export const Table = ({ data }) => (
  <div class="table-block mb-3">
    <table class="table table-layout-fixed">
      <thead>
        <tr>
          <th class="text-center">
            <span>Файли автора</span>
          </th>
          <th class="text-center">
            <span>Правки автору</span>
          </th>
          <th class="text-center">
            <span>Передати замовнику</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map(({ file1, file2, file3, step }, i) => (
          <tr key={i}>
            <td>
              <div class="end-task">
                <span>{STEPS[step]}</span>
                <div class="info-list">
                  <div class="info-list__item">
                    <a href={file1?.link} download>
                      {file1?.name}
                    </a>
                  </div>
                </div>
              </div>
            </td>
            <td>
              {step === "1" || step === "4" ? (
                <div class="end-task justify-content-center">
                  <div class="info-list">
                    <div class="info-list__item">
                      <a href={file2?.link} download>
                        {file2?.name}
                      </a>
                    </div>
                  </div>
                  <button class="delete"></button>
                </div>
              ) : (
                <div class="end-task justify-content-center">
                  <button class="upload">
                    <span>Завантажити</span>
                  </button>
                </div>
              )}
            </td>
            <td>
              <div class="end-task">
                <span>{STEPS[step]}</span>
                {step === "1" || step === "4" ? (
                  <div class="end-task justify-content-center">
                    <div class="info-list">
                      <div class="info-list__item">
                        <a href={file3?.link} download>
                          {file3?.name}
                        </a>
                      </div>
                    </div>
                    <button class="delete"></button>
                  </div>
                ) : (
                  <div class="end-task justify-content-center">
                    <button class="upload">
                      <span>Завантажити</span>
                    </button>
                  </div>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
