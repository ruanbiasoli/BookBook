import React, { useState } from "react";
import { Form, notification } from "antd";
import {
  StyledButton,
  StyledAside,
  StyledInput,
  StyledP,
  StyledForm,
  StyledPassword,
  StyledImage,
  StyledSubscribeButton,
} from "./styledLogin";
import bookshelves from "../../img/undraw_Bookshelves_re_lxoy.svg";
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from "@ant-design/icons";
import { isValidUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 10,
  },
};

const Login = () => {
  const history = useHistory();
  const token = useSelector((state) => state.validLogin.token);
  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  const dispatch = useDispatch();
  const onFinish = () => {
    dispatch(isValidUser(user)); //verificar
    token === null && history.push("/");
  };

  const openNotification = (placement) => {
    notification.warn({
      message: `Atenção!`,
      description: "Usuário ou senha incorreto!",
      placement,
    });
  };

  const onFinishFailed = (errorInfo) => {
    openNotification("topRight");
  };

  return (
    <div style={{ width: "100%" }}>
      <StyledAside>
        <StyledImage src={bookshelves} alt="bookshelves" />
      </StyledAside>
      <StyledLogin>
        <StyledForm
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <StyledFormLogin>
            <Form.Item
              label="Usuário"
              name="user"
              rules={[
                {
                  required: true,
                  message: "Digite seu usuário",
                },
              ]}
            >
              <StyledInput
                style={{ width: "120px", align: "right" }}
                onChange={(e) =>
                  setUser({ ...user, user: e.currentTarget.value })
                }
              />
            </Form.Item>
            <Form.Item
              label="Senha"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Digite sua senha.",
                },
              ]}
            >
              <StyledPassword
                type="password"
                style={{ width: "120px" }}
                onChange={(e) =>
                  setUser({ ...user, password: e.currentTarget.value })
                }
              />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <StyledButton
                type="primary"
                htmlType="submit"
                onClick={token !== null && history.push("/search")}
              >
                Entrar
              </StyledButton>
            </Form.Item>
          </StyledFormLogin>
        </StyledForm>
        <StyledP>
          " O livro é a janela da mente, onde tudo que se fala e sente se torna
          presente em tinta e papel.
          <br />
          Cada passo um verso, no percalço do diverso, um caminho sem fel. Na
          estrada da imaginação, a palavra é voz do coração e os olhos ouvidos
          da alma.
          <br />
          Todos sabem, a verdade seja dita, ao ler se aprende e conquista, mesmo
          o bruto se acalma.
          <br />
          Não tenha medo, cada página liberta o ledo que jaz no peito.
          <br />
          Com saber se evolui, cresce e assim se conclui a estrada do verso
          perfeito.” <br />
          <span style={{ fontWeight: "bold" }}>
            Luiz Paulo de Siqueira Júnior
          </span>
          <br />
          <div style={{ textAlign: "center", marginTop: "2%" }}>
            Inscreva-se hoje!
          </div>
        </StyledP>
        <StyledSubscribeButton onClick={() => history.push("/register")}>
          Inscreva-se
        </StyledSubscribeButton>
      </StyledLogin>
    </div>
  );
};

export default Login;

const StyledLogin = styled.div`
  /* width: 100% */
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2%;
  margin-right: 5%;
  float: right;
  // width: 23vw;
  // height: 40vw;
  // @media (min-width: 300px) and (max-width: 500px){
  //   width: 100%;
  // }
`;
const StyledFormLogin = styled(StyledLogin)`
  display: flex;
  flex-direction: row;
  @media (min-width: 501px) and (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    margin-left: 0%;
    margin-top: 20%;
  }

  @media (min-width: 319px) and (max-width: 500px) {
    margin: 20%;
    flex-direction: column;
    top: -50%;
    left: 15%;
  }
`;
