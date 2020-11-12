import { POST_BOOK } from "../actions";

const defaultState = {
  book: [],
};
const userBookChoice = (state = defaultState, action) => {
  switch (action.type) {
    case POST_BOOK:
      return {
        ...state,
        book: {
          data: action.data,
        },
      };
    default:
      return state;
  }
};

export default userBookChoice;
