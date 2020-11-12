import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getReactBooks,
  postBook,
  getBooksGender,
} from "../../../redux/actions";
import { notification } from "antd";
import {
  SearchedCard,
  StyledSearch,
  StyledNavButton,
  BooksContainer,
  DescriptionDiv,
  NavButton,
  ActionButton,
  FixedBooksContainer,
  Banner,
  Spacer,
  SearchContainer,
} from "../../styled/search-page";
import CardCarousel from "../carosel";
import BookCard from "../book-card/book-card";
import { NavigationBar } from "../navigation/";
import BookCardMobile from "../book-card/book-card-mobile";
import GenderCard from "../book-card/gender-card";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const books = useSelector((state) => state.volumeInfo.volumeInfo);
  const fixedBooks = useSelector((state) => state.fixedInfo.fixedInfo);
  const fixedCategory = useSelector((state) => state.fixedInfo.fixedCategory);
  const [switchComponent, setSwitchComponent] = useState(false);
  const userIdToken = JSON.parse(localStorage.getItem("user"));
  const headerCategory = fixedBooks.map((item) => item.categories);

  const openNotification = (placement) => {
    notification.success({
      message: `Livro adicionado à prateleira!`,
      placement: "bottomRight",
    });
  };

  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const [responsiveState, setResponsiveState] = useState(window.innerWidth);

  useEffect(() => {
    setInterval(() => setResponsiveState(window.innerWidth), 1000);
  }, []);

  useEffect(() => {
    return dispatch(getBooksGender);
  }, []);

  const getBooks = (e) => {
    e.preventDefault();
    setInput(e.target.value);

    if (e.target.value.length > 0) {
      setSwitchComponent(true);
    } else if (e.target.value.length <= 0) {
      setSwitchComponent(false);
    }
  };

  useEffect(() => {
    return dispatch(getBooksGender);
  }, []);

  return (
    <div>
      <NavigationBar>
        <SearchContainer>
          <StyledSearch
            value={input}
            onChange={getBooks}
            placeholder="Pesquisar"
          />
          <StyledNavButton
            onClick={() => {
              input !== undefined && setSwitchComponent(true);
              dispatch(getReactBooks(input));
            }}
          >
            <SearchOutlined />
          </StyledNavButton>
        </SearchContainer>
      </NavigationBar>
      <div style={{ height: "107px" }}></div>

      {switchComponent === false ? (
        <section>
          <Banner>
            <CardCarousel />
          </Banner>
          <Spacer>
            <h2>
              Os mais lidos na categoria:{" "}
              {headerCategory[headerCategory.length - 1]}
            </h2>
          </Spacer>
          <FixedBooksContainer>
            {fixedBooks.map((book, key) => (
              <BookCard
                key={key}
                alt={book.title}
                image={book.image}
                title={book.title}
                description={book.categories}
                click={() => {
                  openNotification();
                  dispatch(
                    postBook(
                      {
                        title: book.title,
                        author: book.authors,
                        shelf: 1,
                        image_url: book.image,
                        categories: book.categories,
                        google_book_id: book.googleID,
                      },
                      userIdToken.id
                    )
                  );
                }}
              />
            ))}
          </FixedBooksContainer>
          <Spacer>
            <h2>Categorias</h2>
          </Spacer>
          <FixedBooksContainer>
            {fixedCategory.map(({ category, url }, index) => (
              <div key={index}>
                <GenderCard
                  category={capitalizeFirstLetter(category)}
                  StyledCategoryImage={url}
                />
              </div>
            ))}
          </FixedBooksContainer>
        </section>
      ) : (
        <BooksContainer>
          <div>
            <h1></h1>
          </div>
          {books.map(
            (
              { title, authors, image, categories, description, googleID },
              index
            ) =>
              responsiveState >= 550 ? (
                <SearchedCard key={index}>
                  <BookCard
                    alt={title}
                    image={image}
                    title={title}
                    description={authors}
                  />
                  <DescriptionDiv>
                    <ul>
                      <li>
                        <h1>{title}</h1>
                      </li>
                      <li>
                        <h3>{description}</h3>
                      </li>
                    </ul>

                    <NavButton>
                      <ActionButton
                        onClick={() => {
                          openNotification();
                          dispatch(
                            postBook(
                              {
                                title: title,
                                author: authors,
                                shelf: 1,
                                image_url: image,
                                categories: categories,
                                google_book_id: googleID,
                              },
                              userIdToken.id
                            )
                          );
                        }}
                      >
                        Quero ler
                      </ActionButton>

                      <ActionButton
                        onClick={() => {
                          openNotification();
                          dispatch(
                            postBook(
                              {
                                title: title,
                                author: authors,
                                shelf: 2,
                                image_url: image,
                                categories: categories,
                                google_book_id: googleID,
                              },
                              userIdToken.id
                            )
                          );
                        }}
                      >
                        Lendo
                      </ActionButton>
                      <ActionButton
                        onClick={() => {
                          openNotification();
                          dispatch(
                            postBook(
                              {
                                title: title,
                                author: authors,
                                shelf: 3,
                                image_url: image,
                                categories: categories,
                                google_book_id: googleID,
                              },
                              userIdToken.id
                            )
                          );
                        }}
                      >
                        Lido
                      </ActionButton>
                    </NavButton>
                  </DescriptionDiv>
                </SearchedCard>
              ) : (
                <BookCardMobile
                  alt={title}
                  title={title}
                  image={image}
                  description={description}
                  shelfOne={() => {
                    dispatch(
                      postBook(
                        {
                          title: title,
                          author: authors,
                          shelf: 1,
                          image_url: image,
                          categories: categories,
                          google_book_id: googleID,
                        },
                        userIdToken.id
                      )
                    );
                  }}
                  shelfTwo={() => {
                    dispatch(
                      postBook(
                        {
                          title: title,
                          author: authors,
                          shelf: 2,
                          image_url: image,
                          categories: categories,
                          google_book_id: googleID,
                        },
                        userIdToken.id
                      )
                    );
                  }}
                  shelfThre={() => {
                    dispatch(
                      postBook(
                        {
                          title: title,
                          author: authors,
                          shelf: 3,
                          image_url: image,
                          categories: categories,
                          google_book_id: googleID,
                        },
                        userIdToken.id
                      )
                    );
                  }}
                />
              )
          )}
        </BooksContainer>
      )}
    </div>
  );
};

export default Search;
