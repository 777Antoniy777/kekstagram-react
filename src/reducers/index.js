import { combineReducers } from "redux";
import pictures from './pictures';
import picture from './picture';
import commentsCount from './commentsCount';

export default combineReducers({
  pictures,
  picture,
  commentsCount,
});
