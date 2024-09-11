import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export const SwaggerPage = () => {
  return (
    <div>
      {" "}
      <SwaggerUI url="sydor.yml" />
    </div>
  );
};
