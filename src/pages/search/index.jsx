import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReactBooks, postBook } from "../../redux/actions/index";
import BookCard from "../../components/system/book-card/book-card";
import Search from "../../components/system/search/index";
import { NavigationBar } from "../../components/system/navigation/index";

const SearchPage = () => {
  const books = useSelector((state) => state.volumeInfo.volumeInfo);
  const userId = useSelector((state) => state.validLogin.id);
  const userChoice = useSelector((state) => state.userBookChoice.book);
  // console.log(
  //   "dados enviados para post de livro adicionado na prateleira após clique na suposta imagem",
  //   userChoice
  // );
  const dispatch = useDispatch();
  const [input, setInput] = useState();

  const getBooks = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <div>
      <NavigationBar>
        <Search
          value={input}
          onChange={getBooks}
          onClick={() => {
            dispatch(getReactBooks(input));
          }}
        />
      </NavigationBar>
      <div>resultado da busca:</div>
      <div>
        {books.map(({ title, authors, image, categories, googleID }, index) => (
          <BookCard key={index} alt={authors} image={image} title={title}>
            {/* {title}
                {authors} */}
            <button
              onClick={() => {
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
                    userId
                  )
                );
              }}
            >
              imaginar que é a capa do livro
            </button>
          </BookCard>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
