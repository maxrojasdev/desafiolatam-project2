import {combineReducers} from "redux";
import users from './users/reducer';
import characters from './characters/reducer'
import episodes from './episodes/reducer'

export default combineReducers({
  users,
  characters,
  episodes,
})