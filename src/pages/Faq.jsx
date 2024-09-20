import axios from "axios";
import { useEffect, useState } from "react";

export const Faq = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(undefined);

  useEffect(() => {
    axios.get("/api/faq.json").then((resp) => setData(resp?.data?.data));
  }, []);

  return (
    <section class="faq bg-block float-header">
      <div class="container">
        <div class="faq__inner">
          <h1 class="title-page center">Відповіді на часті питання</h1>
          <div class="accordion__list">
            {data?.map(({ title, text }, i) => (
              <div
                class={`accordion__item ${i === active && "active"}`}
                key={i}
                onClick={() => setActive(i === active ? undefined : i)}
              >
                <div class="accordion__trigger">{title}</div>
                <div
                  class="accordion__content"
                  style={{ display: i === active ? "block" : "none" }}
                >
                  {text}
                  <div class="btn-block">
                    <a
                      href=""
                      class="btn btn-small btn-outter btn-outter__light"
                    >
                      Дізнатись більше
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
