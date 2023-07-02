import { toast } from "react-toastify";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_ID,
  GET_USER_LIST,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";
import axios from "axios";
export const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};
export const failRequest = (err) => {
  return {
    type: FAIL_REQUEST,
    payload: err,
  };
};
export const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};
export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
export const addUser = () => {
  return {
    type: ADD_USER,
  };
};
export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};
export const getUserID = (data) => {
  return {
    type: GET_USER_ID,
    payload: data,
  };
};








export const FetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest());

    axios
      .get("https://student-crud-qxus.onrender.com/api/students")
      .then((res) => {
        const userlist = res.data;
        dispatch(getUserList(userlist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};

export const Removeuser = (id) => {
  console.log("delete here");
  return (dispatch) => {
    console.log("Hi");
    dispatch(makeRequest());
        axios
        .delete("https://student-crud-qxus.onrender.com/api/students/" + id)
        .then((res) => {
          console.log(res.data);
          dispatch(deleteUser());
        })
        .catch((err) => {
          dispatch(failRequest(err.message));
        });
   
  };
};

export const FunctionAdduser = (data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .post("https://student-crud-qxus.onrender.com/api/students/",data)
      .then((res) => {
        dispatch(addUser());
        toast.success('User Added successfully.')
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};


export const FunctionUpdateuser = (data,id) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .put("https://student-crud-qxus.onrender.com/api/students/"+id,data)
      .then((res) => {
        dispatch(updateUser());
        toast.success('User Updated successfully.')
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};


export const FetchUserByID = (id) => {
  return (dispatch) => {
    dispatch(makeRequest());

    axios
      .get("https://student-crud-qxus.onrender.com/api/students/?id="+id)
      .then((res) => {
        const userlist = res.data;
        dispatch(getUserID(userlist));
      })
      .catch((err) => {
        dispatch(failRequest(err.message));
      });
  };
};