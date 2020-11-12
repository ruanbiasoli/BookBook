import React, { useState, useEffect } from "react";
import { NavigationBar } from "../navigation/";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { StyledSearch, StyledNavButton } from "../../styled/search-page";
import { AiOutlineFileSearch } from "react-icons/ai";
import {
  StyledButton,
  StyledCard,
  BookCol,
  StyledImg,
  StyledDiv,
  BookDisplay,
  TitleRow,
  LateralMenu,
  MenuItens,
  ResponsiveMenu,
} from "./styledShelf";
import axios from "axios";
//componetns
import { Rate, Input } from "antd";

const Shelf = () => {
  const [comment, setComment] = useState();
  const [grade, setGrade] = useState();
  const [gradeValue, setGradeValue] = useState();
  const [listedBooks, setListedBooks] = useState([]);
  const [whichGroup, setWhichGroup] = useState("QUERO_LER");
  const userChoice = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

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
          headers: { Authorization: token },
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

  useEffect(() => getPersonalShelf(), []);

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
      <NavigationBar>
        {/* <StyledSearch
          style={{ visibility: "hidden" }}
          placeholder="Pesquisar"
        />
        <StyledNavButton style={{ visibility: "hidden" }}>
          <AiOutlineFileSearch style={{ visibility: "hidden" }} />
        </StyledNavButton> */}
      </NavigationBar>
      <div style={{ height: "107px" }}></div>
      <StyledDiv>
        <TitleRow>
          <Col span={18} push={6}>
            {listedBooks.length === 1 ? (
              <span>{listedBooks.length} livro encontrado</span>
            ) : (
              <>
                {listedBooks.length > 1 ? (
                  <span>{listedBooks.length} livros encontrados</span>
                ) : (
                  <span>Nenhum livro encontrado</span>
                )}
              </>
            )}
          </Col>
          <Col span={6} pull={18}>
            <h3>Sua estante</h3>
          </Col>
        </TitleRow>
        <ResponsiveMenu>
          {whichGroup === "QUERO_LER" ? (
            <li
              onClick={() => setWhichGroup("QUERO_LER")}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Quero ler
            </li>
          ) : (
            <li
              onClick={() => setWhichGroup("QUERO_LER")}
              style={{ cursor: "pointer" }}
            >
              Quero ler
            </li>
          )}
          {whichGroup === "ESTOU_LENDO" ? (
            <li
              onClick={() => setWhichGroup("ESTOU_LENDO")}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Estou lendo atualmente
            </li>
          ) : (
            <li
              onClick={() => setWhichGroup("ESTOU_LENDO")}
              style={{ cursor: "pointer" }}
            >
              Estou lendo atualmente
            </li>
          )}
          {whichGroup === "JÁ_LI" ? (
            <li
              onClick={() => setWhichGroup("JÁ_LI")}
              style={{ cursor: "pointer", color: "blue" }}
            >
              Terminei de ler
            </li>
          ) : (
            <li
              onClick={() => setWhichGroup("JÁ_LI")}
              style={{ cursor: "pointer" }}
            >
              Terminei de ler
            </li>
          )}
        </ResponsiveMenu>
        <Row>
          <BookCol span={18} push={6}>
            {/*-------------------------------------- CARD ESTILIZADO ----------------------------------------------------*/}
            <BookDisplay>
              {whichGroup === "QUERO_LER" &&
                filterWish.map((item, index) => (
                  <StyledCard className="book_cards" key={index}>
                    <StyledImg alt="item.title" src={item.image_url} />
                    <div>
                      <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                      <span>Autor: </span> {item.author}
                      <div></div>
                      <br />
                      {item.review && (
                        <span style={{ fontWeight: "bolder" }}>
                          Comentários:{" "}
                        </span>
                      )}
                      <br /> {item.review}
                      <br />
                      {item.grade && (
                        <>
                          <span style={{ fontWeight: "bolder" }}>Nota: </span>{" "}
                          {item.grade}/5{" "}
                        </>
                      )}
                      <br />
                      <br />
                      <StyledButton
                        className="book_button"
                        onClick={() => changeShelf(item, 2)}
                      >
                        Estou lendo
                      </StyledButton>
                      <StyledButton
                        className="book_button"
                        onClick={() => deleteBook(item)}
                      >
                        Remover livro
                      </StyledButton>
                    </div>
                  </StyledCard>
                ))}
              {whichGroup === "ESTOU_LENDO" &&
                filterReading.map((item, index) => (
                  <StyledCard className="book_cards" key={index}>
                    <StyledImg alt="item.title" src={item.image_url} />
                    <div>
                      <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                      <br />
                      <span>Autor: </span> {item.author}
                      <div></div>
                      <br />
                      {item.review && (
                        <span style={{ fontWeight: "bolder" }}>
                          Comentários:{" "}
                        </span>
                      )}
                      <br /> {item.review}
                      <br />
                      {item.grade && (
                        <>
                          <span style={{ fontWeight: "bolder" }}>Nota: </span>{" "}
                          {item.grade}/5{" "}
                        </>
                      )}
                      <br />
                      <br />
                      <StyledButton
                        className="book_button"
                        onClick={() => changeShelf(item, 3)}
                      >
                        Já li
                      </StyledButton>
                      <StyledButton
                        className="book_button"
                        onClick={() => deleteBook(item)}
                      >
                        Remover livro
                      </StyledButton>
                    </div>
                  </StyledCard>
                ))}
              {whichGroup === "JÁ_LI" &&
                filterReaded.map((item, index) => (
                  <StyledCard className="book_cards" key={index}>
                    <StyledImg alt="item.title" src={item.image_url} />
                    <div>
                      <h3 style={{ fontWeight: "bold" }}>{item.title}</h3>
                      <br />
                      <span>Autor: </span> {item.author}
                      <div></div>
                      <br />
                      {item.review && (
                        <span style={{ fontWeight: "bolder" }}>
                          Comentários:{" "}
                        </span>
                      )}
                      <br /> {item.review}
                      <br />
                      <br />
                      {item.grade && (
                        <>
                          <span style={{ fontWeight: "bolder" }}>Nota: </span>{" "}
                          {item.grade}/5{" "}
                        </>
                      )}
                      <br />
                      {grade !== item.id ? (
                        <>
                          <StyledButton
                            className="book_button"
                            onClick={() => changeShelf(item, 1)}
                          >
                            Não leu?
                          </StyledButton>
                          <StyledButton
                            className="book_button"
                            onClick={() => deleteBook(item)}
                          >
                            Remover livro
                          </StyledButton>
                          <StyledButton
                            onClick={() => {
                              setGrade(item.id);
                              setComment();
                              setGradeValue();
                            }}
                          >
                            Avaliar
                          </StyledButton>
                        </>
                      ) : (
                        <>
                          <br />
                          <p>Digite o que você acha do livro</p>
                          <Input
                            defaultValue={item.review}
                            onChange={changeReview}
                          />
                          <br />
                          <Rate
                            allowClear={false}
                            defaultValue={item.grade}
                            onChange={changeInput}
                          />
                          <span className="ant-rate-text">Avalie</span>
                          <StyledButton
                            onClick={() =>
                              changeShelf(item, item.shelf, gradeValue, comment)
                            }
                          >
                            Enviar
                          </StyledButton>
                        </>
                      )}
                    </div>
                  </StyledCard>
                ))}
            </BookDisplay>
          </BookCol>

          <Col span={6} pull={18}>
            <LateralMenu>
              {whichGroup === "QUERO_LER" ? (
                <MenuItens
                  onClick={() => setWhichGroup("QUERO_LER")}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  Quero ler
                </MenuItens>
              ) : (
                <MenuItens
                  onClick={() => setWhichGroup("QUERO_LER")}
                  style={{ cursor: "pointer" }}
                >
                  Quero ler
                </MenuItens>
              )}
              {whichGroup === "ESTOU_LENDO" ? (
                <MenuItens
                  onClick={() => setWhichGroup("ESTOU_LENDO")}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  Estou lendo atualmente
                </MenuItens>
              ) : (
                <MenuItens
                  onClick={() => setWhichGroup("ESTOU_LENDO")}
                  style={{ cursor: "pointer" }}
                >
                  Estou lendo atualmente
                </MenuItens>
              )}
              {whichGroup === "JÁ_LI" ? (
                <MenuItens
                  onClick={() => setWhichGroup("JÁ_LI")}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  Terminei de ler
                </MenuItens>
              ) : (
                <MenuItens
                  onClick={() => setWhichGroup("JÁ_LI")}
                  style={{ cursor: "pointer" }}
                >
                  Terminei de ler
                </MenuItens>
              )}
            </LateralMenu>
          </Col>
        </Row>
      </StyledDiv>
    </div>
  );
};

export default Shelf;
