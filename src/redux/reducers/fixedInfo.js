import { FIXED_BOOK } from "../actions";

const defaultState = {
  fixedInfo: [],
  fixedCategory: [],
};
const fixedInfo = (state = defaultState, action) => {
  switch (action.type) {
    case FIXED_BOOK:
      return {
        ...state,
        fixedCategory: action.imageCategory,
        fixedInfo: action.data.items.map(({ volumeInfo, id }) => ({
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

export default fixedInfo;
