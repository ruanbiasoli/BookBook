import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

const AccessDenied = () => {
  const history = useHistory();

  return (
    <div>
      <Result
        status="403"
        title="403"
        subTitle="Ooops, você não tem autorização para acessar este conteúdo."
        extra={
          <Button type="primary" onClick={() => history.push("/")}>
            Voltar para o login
          </Button>
        }
      />
    </div>
  );
};

export default AccessDenied;
