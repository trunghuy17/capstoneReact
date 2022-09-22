import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJSON,
  setStore,
  setStoreJSON,
  USER_LOGIN,
} from "../../util/config";

const initialState = {
  userLogin: getStoreJSON(USER_LOGIN),
  toKen: "",
};

const userReducer = createSlice({
  name: "userRuducer",
  initialState,
  reducers: {
    setUserLoginAction: (state, action) => {
      let userLogin = action.payload;
      state.userLogin = userLogin;
    },
  },
});

export const { setUserLoginAction } = userReducer.actions;

export default userReducer.reducer;

/*-------action api thunk--------- */
export const signinApi = (userLogin) => {
  try {
    return async (dispatch) => {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });
      console.log(result.data.content);
      // Lưu  lại toKen vào localStore
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      // lưu lại email
      setStoreJSON(USER_LOGIN, result.data.content);

      // Đưa lên userLogin thành công lên reducer
      const action = setUserLoginAction(result.data.content);
      dispatch(action);
    };
  } catch (err) {
    console.log(err);
  }
};

// api facebooksigin
export const facebookLoginAPi = (toKen) => {
  try {
    return async (dispatch) => {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/facebooklogin",
        method: "POST",
        data: {
          facebookToken: toKen,
        },
      });
      console.log(result.data.content);
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      setStoreJSON("facebookLogin", result.data.content);
      const action = setUserLoginAction(result.data.content);
      dispatch(action);
    };
  } catch (error) {
    console.log(error);
  }
};
