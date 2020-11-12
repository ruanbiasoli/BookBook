import React from "react";
import {
  Container,
  BoxAnotherUser,
  BoxRow,
  AnotherUserBook,
  AnotherUserShelf,
  AnotherUserAuthor,
  AnotherImage,
  TitleShelf,
} from "./timeline.js";

const AnotherUser = (props) => {
  return (
    <>
      <Container>
        <TitleShelf>{props.shelfTitle}</TitleShelf>
        <BoxAnotherUser>
          {props.shelf.map(({ title, image_url }, index) => (
            <BoxRow>
              <AnotherUserShelf key={index}>
                <AnotherUserBook>
                  <AnotherImage
                    alt="book"
                    src={
                      image_url !== null
                        ? image_url
                        : "https://books.google.com/books/content?id=AAWDRDwd3p0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    }
                  />
                  <AnotherUserAuthor>{title}</AnotherUserAuthor>
                </AnotherUserBook>
              </AnotherUserShelf>
            </BoxRow>
          ))}
        </BoxAnotherUser>
      </Container>
    </>
  );
};

export default AnotherUser;
