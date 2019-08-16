import {initialState} from "./initialState";
import {
  GET_USER_ERROR,
  GET_USER_INIT,
  GET_USER_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_INIT,
  GET_USERS_SUCCESS
} from "./const";

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS_INIT: {
      return {
        ...state,
        usersLoading: true
      }
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        usersLoading: false,
        usersError: false,
      }
    }
    case GET_USERS_ERROR: {
      return {
        ...state,
        users: state.users,
        usersLoading: false,
        usersError: true,
      }
    }
    case GET_USER_INIT: {
      return {
        ...state,
        userLoading: true
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        userLoading: false,
        userError: false,
      }
    }
    case GET_USER_ERROR: {
      return {
        ...state,
        user: state.users,
        userLoading: false,
        userError: true,
      }
    }
    default: {
      return state
    }
  }
}