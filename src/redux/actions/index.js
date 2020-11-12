import axios from "axios";

export const ACTION_BOOK = "ACTION_BOOK";
export const LOGIN = "LOGIN";
export const POST_BOOK = "POST_BOOK";
export const TIMELINE = "TIMELINE";
export const FIXED_BOOK = "FIXED_BOOK";
export const LOGOUT = "LOGOUT";

export const getReactBooks = (input) => (dispatch) => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)

    .then((resp) => {
      if (resp.data.totalItems > 0) {
        dispatch({
          type: ACTION_BOOK,
          data: resp.data,
        });
      }
    })
    .catch((data) => {
      if (data.status !== 200 || data.status !== 201) {
        return console.log("Error request");
      }
    });
};

export const isValidUser = (values) => (dispatch) => {
  axios
    .post("https://ka-users-api.herokuapp.com/authenticate", values)
    .then((res) => {
      if (res) {
        localStorage.setItem("token", res.data.auth_token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        return dispatch({
          type: LOGIN,
          data: res.data,
          token: res.data.auth_token,
        });
      }
    })
    .catch(({ response }) => {
      if (response.status === 401) {
        console.log("Invalid credentials!");
        return localStorage.clear();
      } else {
        return console.log("Requisition error!");
      }
    });
};

export const postBook = (defaultBook, id) => (dispatch) => {
  axios
    .post(
      `https://ka-users-api.herokuapp.com/users/${id}/books/`,
      defaultBook,
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    )
    .then((resp) => {
      // console.log("post", resp);
      return dispatch({
        type: POST_BOOK,
        data: resp.data,
      });
    })
    .catch((error) => console.log(error));
};

export const getTimeline = (dispatch) => {
  axios
    .get("https://ka-users-api.herokuapp.com/book_reviews", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((resp) => {
      return dispatch({ type: TIMELINE, data: resp.data });
    });
};

const choices = [
  {
    category: "history",
    url:
      "https://books.google.com/books/content?id=-95TaEsu1gsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    category: "fiction",
    url:
      "https://books.google.com/books/content?id=88KiDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    category: "computer",
    url:
      "https://books.google.com/books/content?id=HHc7KC6xHc8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    category: "fantasy",
    url:
      "https://books.google.com/books/content?id=4L3ftlYrqnsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    category: "music",
    url:
      "https://books.google.com/books/content?id=hKIbVJD5dKkC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  },
  {
    category: "art",
    url:
      "https://books.google.com/books/content?id=gqBqhcqf9RQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
  {
    category: "sociology",
    url:
      "https://books.google.com/books/content?id=JBglZNsbExkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
];

const x = Math.floor(Math.random() * 7);
export const getBooksGender = (dispatch) => {
  // console.log(choices[x]["category"]);
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${choices[x]["category"]}`
    )
    .then((res) => {
      return dispatch({
        type: FIXED_BOOK,
        imageCategory: choices,
        data: res.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logOutUser = (logoutUser) => (dispatch) => {
  localStorage.clear();

  return dispatch({
    type: LOGOUT,
  });
};
