import React from "react";
// import { useLocation, Redirect } from "react-router-dom";
//components
import Login from "../../components/login";

//AQUI VAMOS CRIAR A TELA HOME, QUE SOLICITA O LOGIN AO USUÁRIO, CASO NÃO ESTEJA LOGADO,
//TAMBÉM ADICIONAREMOS AQUI A LÓGICA DA PÁGINA PRINCIPAL CASO ELE ESTEJA LOGADO, FAZENDO -
// UM IF NUMA VARIAVEL QUE ARMAZENA O VALOR 'TOKEN' DO LOCALSTORAGE

const HomeDisplay = () => {
  //   const location = useLocation();

  return (
    <div>
      <Login />
    </div>
  );
};

export default HomeDisplay;
