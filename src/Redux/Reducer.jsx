import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_ID,
  GET_USER_LIST,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";

const intialstate = {
  loading: true,
  userlist: [], // has a list of users in the response
  userobj: {}, // single user by their id is found in the response
  errmessage: " ",
};

export const Reducer = (state = intialstate, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errmessage: action.payload,
      };
    case GET_USER_LIST:
      return {
        loading: false,
        errmessage: "",
        userlist: action.payload,
        userobj: {},
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case GET_USER_ID:
      return {
        ...state,
        loading: false,
        userobj: action.payload,
      };
    default:
      return state;
  }
};
