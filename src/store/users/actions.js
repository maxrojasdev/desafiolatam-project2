import {
  GET_USER_ERROR,
  GET_USER_INIT,
  GET_USER_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_INIT,
  GET_USERS_SUCCESS
} from "./const";
import {getUser, getUsers} from "./server";

export const getUsersAction = url => {
  return dispatch => {
    dispatch({type: GET_USERS_INIT});
    getUsers(url).then(response => {
      dispatch({type: GET_USERS_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: GET_USERS_ERROR})
    })
  }
};

export const getUserAction = id => {
  return dispatch => {
    dispatch({type: GET_USER_INIT});
    getUser(id).then(response => {
      dispatch({type: GET_USER_SUCCESS, payload: response.data})
    }).catch(() => {
      dispatch({type: GET_USER_ERROR})
    })
  }
};