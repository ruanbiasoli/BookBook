import React, {useState} from "react";
import { useSelector } from "react-redux";
import TopBar from '../../top-bar/top-bar';
import { Row, Col} from 'antd';
import styled from 'styled-components';
import axios from 'axios';
//componetns
import { Button, Card, Rate, Input } from "antd";

//prateleira
//vou atualizar essa página ainda para utilizar formulários para dar avaliações
//fazer comentários e selecionar notas

const Shelf = () => {
  const [comment, setComment] = useState();
  const [grade, setGrade] = useState();
  const [gradeValue, setGradeValue] = useState();
  const [listedBooks, setListedBooks] = useState([]);
  const userChoice = JSON.parse(localStorage.getItem('user'));
  const [token, setToken] = useState(localStorage.getItem("token"));

  //buscar prateleira pessoal
  const getPersonalShelf = () => {
    axios
      .get(`https://ka-users-api.herokuapp.com/users/${userChoice.id}/books`, {
        headers: { Authorization: token },
      })
      .then((res) => setListedBooks(res.data))
      .catch(({ error }) => console.log(error));
  };

  //deletar um livro
  const deleteBook = (item) => {
    axios
      .delete(
        `https://ka-users-api.herokuapp.com/users/${userChoice.id}/books/${item.id}`,
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      )
      .then(() => getPersonalShelf())
      .catch(({ error }) => console.log(error));
  };

  //CONST VAI MUDAR OS VALORES SHELF, COMMENT E GRADE;
  const changeShelf = (item, shelf, grade, comment) => {
    const values = {
      book: {
        shelf: shelf ? shelf : item.shelf,
        grade: grade ? grade : item.grade,
        review: comment ? comment : item.review,
      },
    };

    axios
      .put(
        `https://ka-users-api.herokuapp.com/users/${userChoice.id}/books/${item.id}`,
        values,
        {
          headers: { Authorization: token },
        }
      )
      .then(() => getPersonalShelf())
      .catch(({ error }) => console.log(error));

    //seta as variáveis quando terminar as requisições
    setGrade();
    setGradeValue();
    setComment();
  };

  //VARIAVEIS QUE FILTRAM ONDE O STATUS DE LEITURA DO USER
  const filterWish = listedBooks.filter((item) => item.shelf === 1);
  const filterReading = listedBooks.filter((item) => item.shelf === 2);
  const filterReaded = listedBooks.filter((item) => item.shelf === 3);

  const changeInput = (e) => {
    setGradeValue(e);
  };

  const changeReview = (e) => {
    setComment(e.target.value);
  };
  return (
    <div>
      <TopBar />
      <div  id="main_section">
      <Row id="title_row">
        <Col span={18} push={6}>
          <span>1 livro(s) encontrado(s)</span>
        </Col>
        <Col span={6} pull={18}>
          <h3>Sua estante</h3>
        </Col>
    </Row>
    <Row id="responsive_menu">

            <li className='menu_links'>Quero ler</li>
            <li className='menu_links'>Estou lendo atualmente</li>
            <li className='menu_links'>Terminei de ler</li>
    </Row>
    <Row>
      <Col span={18} push={6}>

    {/*-------------------------------------- CARD ESTILIZADO ----------------------------------------------------*/}
    <div className="books_display">
      <StyledCard 
          className="book_cards"
          key={1}
          >
            <StyledImg alt="example" src="https://img.wook.pt/images/cinco-semanas-em-balao-julio-verne/MXwxMzE3NDI4Nnw4NzQ3ODU2fDEzODM1MjMyMDAwMDA=/500x" />
            <div>
            <h3 style={{fontWeight: 'bold'}}>Cinco Semanas em um Balão</h3>
              <br />
              Julio Verne
              <br />
              Comentários: <br /> Melhor livro do mundo
              <br />
              Avaliação: <Rate />
            <StyledButton className="book_button">Já li</StyledButton>
            <StyledButton className="book_button">Remover livro</StyledButton>
          </div>
        </StyledCard>
         {/*----------------------------------TESTE--------------------------------------------*/}
         <StyledCard 
          className="book_cards"
          key={1}
          >
            <StyledImg alt="example" src="https://img.wook.pt/images/cinco-semanas-em-balao-julio-verne/MXwxMzE3NDI4Nnw4NzQ3ODU2fDEzODM1MjMyMDAwMDA=/500x" />
            <div>
            <h3 style={{fontWeight: 'bold'}}>Cinco Semanas em um Balão</h3>
              <br />
              Julio Verne
              <br />
              Comentários: <br /> Melhor livro do mundo
              <br />
              Avaliação: <Rate />
            <StyledButton className="book_button">Já li</StyledButton>
            <StyledButton className="book_button">Remover livro</StyledButton>
          </div>
        </StyledCard>

        <StyledCard 
          className="book_cards"
          key={1}
          >
            <StyledImg alt="example" src="https://img.wook.pt/images/cinco-semanas-em-balao-julio-verne/MXwxMzE3NDI4Nnw4NzQ3ODU2fDEzODM1MjMyMDAwMDA=/500x" />
            <div>
            <h3 style={{fontWeight: 'bold'}}>Cinco Semanas em um Balão</h3>
              <br />
              Julio Verne
              <br />
              Comentários: <br /> Melhor livro do mundo
              <br />
              Avaliação: <Rate />
            <StyledButton className="book_button">Já li</StyledButton>
            <StyledButton className="book_button">Remover livro</StyledButton>
          </div>
        </StyledCard>

        <StyledCard 
          className="book_cards"
          key={1}
          >
            <StyledImg alt="example" src="https://img.wook.pt/images/cinco-semanas-em-balao-julio-verne/MXwxMzE3NDI4Nnw4NzQ3ODU2fDEzODM1MjMyMDAwMDA=/500x" />
            <div>
            <h3 style={{fontWeight: 'bold'}}>Cinco Semanas em um Balão</h3>
              <br />
              Julio Verne
              <br />
              Comentários: <br /> Melhor livro do mundo
              <br />
              Avaliação: <Rate />
            <StyledButton className="book_button">Já li</StyledButton>
            <StyledButton className="book_button">Remover livro</StyledButton>
          </div>
        </StyledCard>

        <StyledCard 
          className="book_cards"
          key={1}
          >
            <StyledImg alt="example" src="https://img.wook.pt/images/cinco-semanas-em-balao-julio-verne/MXwxMzE3NDI4Nnw4NzQ3ODU2fDEzODM1MjMyMDAwMDA=/500x" />
            <div>
            <h3 style={{fontWeight: 'bold'}}>Cinco Semanas em um Balão</h3>
              <br />
              Julio Verne
              <br />
              Comentários: <br /> Melhor livro do mundo
              <br />
              Avaliação: <Rate />
            <StyledButton className="book_button">Já li</StyledButton>
            <StyledButton className="book_button">Remover livro</StyledButton>
          </div>
        </StyledCard>

        <StyledCard 
          className="book_cards"
          key={1}
          >
            <StyledImg alt="example" src="https://img.wook.pt/images/cinco-semanas-em-balao-julio-verne/MXwxMzE3NDI4Nnw4NzQ3ODU2fDEzODM1MjMyMDAwMDA=/500x" />
            <div>
            <h3 style={{fontWeight: 'bold'}}>Cinco Semanas em um Balão</h3>
              <br />
              Julio Verne
              <br />
              Comentários: <br /> Melhor livro do mundo
              <br />
              Avaliação: <Rate />
            <StyledButton className="book_button">Já li</StyledButton>
            <StyledButton className="book_button">Remover livro</StyledButton>
          </div>
        </StyledCard>
    </div>
      </Col>
        <Col id="menu_col" span={6} pull={18}>
          <ul id="lateral_menu">
            <li className='menu_links'>Quero ler</li>
            <li className='menu_links'>Estou lendo atualmente</li>
            <li className='menu_links'>Terminei de ler</li>
          </ul>
      </Col>
    </Row>
      {/*<h1>Quero ler ----------------------------------------</h1>*/}
      {filterWish.map((item, index) => (
        <Card
        key={index}
        hoverable
        style={{width: 500}}
        >
        <div  style={{ border: "1px solid black" }}>
          <div>
            <h3 style={{fontWeight: 'bold'}}>{item.title}</h3>
            <br />
            {item.author}
            <br />
            Comentários: {item.review}
            <br />
            Avaliação: {item.grade}/5
            <div><img src={item.image_url}/></div>
            <br />
          </div>
          <Button onClick={() => changeShelf(item, 2)}>Estou lendo</Button>
          <Button onClick={() => deleteBook(item)}>Remover livro</Button>
        </div>
        </Card>
      ))}
      {/*<h1>estou lendo --------------------------------------------------</h1>*/}
      {filterReading.map((item, index) => (
        <Card 
        key={index}
        hoverable
        style={{width: 500}}>
        <div style={{ border: "1px solid black" }}>
          <div>
          <h3 style={{fontWeight: 'bold'}}>{item.title}</h3>
            <br />
            {item.author}
            <br />
            Comentários: {item.review}
            <br />
            Avaliação: {item.grade}/5
            <div><img src={item.image_url}/></div>
          </div>
          <Button onClick={() => changeShelf(item, 3)}>Já li</Button>
          <Button onClick={() => deleteBook(item)}>Remover livro</Button>
        </div>
        </Card>
      ))}
      {/*<h1>já li ---------------------------------------------------</h1>*/}
      {filterReaded.map((item, index) => (
        <Card 
        key={index} 
        hoverable
        style={{width: 500}}>
        <div style={{ border: "1px solid black" }}>
          <div>
          <h3 style={{fontWeight: 'bold'}}>{item.title}</h3>
            <br />
            {item.author}
            <br />
            Comentários: {item.review}
            <br />
            Avaliação: {item.grade}/5
            <div><img src={item.image_url}/></div>
          </div>
          <div>
            {grade !== item.id ? (
              <>
                <Button onClick={() => changeShelf(item, 1)}>
                  Ainda não leu esse livro?
                </Button>
                <Button
                  onClick={() => {
                    setGrade(item.id);
                    setComment();
                    setGradeValue();
                  }}
                >
                  Avaliar
                </Button>
                <Button onClick={() => deleteBook(item)}>Remover</Button>
              </>
            ) : (
              <>
                <br />
                <p>Digite o que você acha do livro</p>
                <Input defaultValue={item.review} onChange={changeReview} />
                <br />
                <Rate
                  allowClear={false}
                  defaultValue={item.grade}
                  onChange={changeInput}
                />
                <span className="ant-rate-text">Avalie</span>
                <button
                  onClick={() =>
                    changeShelf(item, item.shelf, gradeValue, comment)
                  }
                >
                  Enviar
                </button>
              </>
            )}
          </div>
        </div>
        </Card>
      ))}
      <button onClick={() => getPersonalShelf()}>Requisition</button>
      </div>
    </div>

    )
};

export default Shelf;



const StyledCard = styled.div `
 width: 250px;
 padding: 5px;
`

const StyledImg = styled.img `
width: 200px;
`

const StyledButton = styled.button `
border-radius: 5px;
border: 1px solid  rgb(155, 177, 255);
background-color: #587CFF;
margin-left: 5px;
color: white;

&:hover{
  background-color: #FFC542; 
  border: 1px solid rgb(255, 211, 110);
}
`


