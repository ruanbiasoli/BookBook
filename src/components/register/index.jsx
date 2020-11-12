import React, { useState } from "react";
//libs
import axios from "axios";
import { Form, Input, Tooltip, Checkbox, notification } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

//Import do styled component
import {
  StyledForm,
  StyledButton,
  StyledInput,
  StyledCenterForm,
  StyledFieldForm,
  BackToLogin,
} from "./styled-form";

// A FAZER, LOGICA DO REGISTRO

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  //states
  const [user, setUser] = useState({
    name: "",
    user: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const openNotification = (placement) => {
    notification.success({
      message: `Atenção!`,
      description: "Usuário cadastrado com sucesso",
      placement,
    });
  };

  const openNotificationWarn = (placement, mensagem) => {
    notification.warn({
      message: `Atenção!`,
      description: mensagem,
      placement,
    });
  };

  //ruan: função que cria o usuário
  const createNewUser = () => {
    axios
      .post("https://ka-users-api.herokuapp.com/users", { user })
      .then(() => {
        //sobe uma tela mostrando que o usuario foi cadastrado
        openNotification("topRight");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          return openNotificationWarn('topRight' , 'Usuário já existe!')
        } else {
          return openNotificationWarn('topRight' , 'Erro na requisição!')
        }
      });
  };
  const [form] = Form.useForm();
  const onFinish = () => {
    createNewUser();
    form.resetFields();
  };
  return (
    <StyledForm>
      <StyledCenterForm
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        {" "}
        <div>
          <h3>Crie sua conta</h3>
        </div>
        <StyledFieldForm.Item
          name="name"
          label={
            <span>
              Nome&nbsp;
              <Tooltip title="E aí bagaça, qual sua graça?!">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Sem migué, insere teu nome mané!",
              whitespace: true,
            },
          ]}
        >
          <StyledInput
            onChange={({ target: { value } }) =>
              setUser({ ...user, name: value })
            }
          />
        </StyledFieldForm.Item>
        <StyledFieldForm.Item
          name="username"
          label={
            <span>
              Apelido&nbsp;
              <Tooltip title="Sem drama, como a mamãe te chama?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Para de graça e preenche essa bagaça!",
              whitespace: true,
            },
          ]}
        >
          <StyledInput
            onChange={({ target: { value } }) =>
              setUser({ ...user, user: value })
            }
          />
        </StyledFieldForm.Item>
        <StyledFieldForm.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "Sem drama, a gente sabe que SPAM não é bacana!",
            },
            {
              required: true,
              message: "Se não colocar seu e-mail, diz bye-bye correio!",
            },
          ]}
        >
          <StyledInput
            onChange={({ target: { value } }) =>
              setUser({ ...user, email: value })
            }
          />
        </StyledFieldForm.Item>
        <StyledFieldForm.Item
          name="password"
          label="Senha"
          rules={[
            {
              required: true,
              message: "Seja sagaz, senha 123 não se faz!",
            },
          ]}
          hasFeedback
        >
          <StyledInput.Password
            onChange={({ target: { value } }) =>
              setUser({ ...user, password: value })
            }
          />
        </StyledFieldForm.Item>
        <StyledFieldForm.Item
          name="confirm"
          label="Confirmar a senha"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "É só pra confirmar, não precisa reclamar!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                rule = rule;
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "Assim é inadimissível, a senha não é compatível!"
                );
              },
            }),
          ]}
        >
          <Input.Password
            onChange={({ target: { value } }) =>
              setUser({ ...user, password_confirmation: value })
            }
          />
        </StyledFieldForm.Item>
        <StyledFieldForm.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject("marca sem medo!"),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            Vou sem medo, concordo com o <a href="">termo</a>
          </Checkbox>
        </StyledFieldForm.Item>
        <StyledFieldForm.Item {...tailFormItemLayout}>
          <StyledButton type="primary" htmlType="submit">
            {/* Registrei! Bora ler o livro meu rei? */}
            Criar conta
          </StyledButton>
          <BackToLogin>
            <p>
              Já tenho uma <Link to="/login">conta</Link>
            </p>
          </BackToLogin>
        </StyledFieldForm.Item>
      </StyledCenterForm>
    </StyledForm>
  );
};
export default Register;
