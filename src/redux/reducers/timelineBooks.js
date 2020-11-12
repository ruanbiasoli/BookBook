import { TIMELINE } from "../actions";

const defaultState = {
  books: [],
};
const timelineBooks = (state = defaultState, action) => {
  switch (action.type) {
    case TIMELINE:
      return {
        ...state,
        books: action.data.map(
          ({ title, author, categories, image_url, creator }) => ({
            title: title,
            author: author,
            categories: categories,
            image:
              image_url !== null
                ? image_url.replace("http", "https").replace("httpss", "https")
                : "https://books.google.com/books/content?id=AAWDRDwd3p0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
            username: creator.user,
            email: creator.email,
          })
        ),
      };
    default:
      return state;
  }
};

export default timelineBooks;
