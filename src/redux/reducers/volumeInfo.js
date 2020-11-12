import { ACTION_BOOK } from "../actions";

const defaultState = {
  volumeInfo: [],
  data: [],
};
const volumeInfo = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_BOOK:
      return {
        ...state,
        data: action.data.items,
        volumeInfo: action.data.items.map(({ volumeInfo, id }) => ({
          title: volumeInfo.title !== undefined ? volumeInfo.title : "",
          authors:
            volumeInfo.authors !== undefined
              ? volumeInfo.authors.join(",")
              : "",
          categories:
            volumeInfo.categories !== undefined
              ? volumeInfo.categories.join(",")
              : "",
          description:
            volumeInfo.description !== undefined
              ? volumeInfo.description.split(".")[0]
              : "",
          image:
            volumeInfo.imageLinks !== undefined
              ? volumeInfo.imageLinks.thumbnail.replace("http", "https")
              : "https://books.google.com/books/content?id=AAWDRDwd3p0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
          googleID: id !== undefined ? id : "",
        })),
      };
    default:
      return state;
  }
};

export default volumeInfo;
