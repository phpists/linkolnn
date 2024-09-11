import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import axios from "axios";

export const Instructions = () => {
  const [openRow, setOpenRow] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/instructions.json")
      .then((resp) => setData(resp?.data?.data));
  }, []);

  return (
    <main className="main-content">
      <div className="container-fluid">
        <Breadcrumbs
          links={[
            { title: "Головна", link: "/" },
            { title: "Інструкції", link: "" },
          ]}
        />
        <h1 className="title-page mb-4">Інструкції</h1>

        <div className="table-block mb-4">
          <table className="table table-without-header table-about">
            <tbody>
              {data?.map(({ title, text }, i) => (
                <React.Fragment key={i}>
                  <tr>
                    <td>
                      <a
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenRow(openRow === i ? null : i);
                        }}
                        className="link"
                      >
                        {title}
                      </a>
                    </td>
                  </tr>
                  {openRow === i ? (
                    <tr>
                      <td>{text}</td>
                    </tr>
                  ) : null}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};
