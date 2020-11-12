import { combineReducers } from "redux";
import volumeInfo from "./volumeInfo";
import validLogin from "./validLogin";
import userBookChoice from "./addedBook";
import timelineBooks from "./timelineBooks";
import fixedInfo from "./fixedInfo";

export default combineReducers({
  volumeInfo,
  validLogin,
  userBookChoice,
  timelineBooks,
  fixedInfo,
});
