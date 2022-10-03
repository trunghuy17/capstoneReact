import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { history } from "../..";
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
    setUserUpdateAction: (state, action) => {
      let userUpdate = action.payload;
      state.userLogin = userUpdate;
    },
  },
});

export const { setUserLoginAction, setUserUpdateAction } = userReducer.actions;

export default userReducer.reducer;

/*-------action api thunk--------- */
export const signinApi = (userLogin) => {
  return async (dispatch) => {
    try {
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

      history.push("/profile");
    } catch (err) {
      alert("Tài khoản hoặc mật khẩu không đúng ! Vui lòng nhập lại !");
      console.log(err);
      history.push("/login");
    }
  };
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
      setStoreJSON(USER_LOGIN, result.data.content);
      const action = setUserLoginAction(result.data.content);
      dispatch(action);
      // Chuyển hướng trang tới /profile
      history.push("/profile");
    };
  } catch (error) {
    console.log(error);
    history.push("/login");
  }
};

// Call api getProfile
export const getProfileApi = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`,
        },
      });
      console.log("userLogin: ", result.data.content);
      const action = setUserLoginAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };
};

// Call api update profile

export const updateProfileApi = (userUpdate) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/updateProfile",
        method: "POST",
        data: userUpdate,
        headers: {
          Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`,
        },
      });
      console.log("update:", result);
      const action = setUserLoginAction(userUpdate);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

export const signupApi = (userRegister) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: userRegister,
      });
      console.log(result.data.content);
      alert("Đăng ký thành công!");
      history.push("/login");
    } catch (error) {
      alert(error.response.data.message);
      console.log({ error });
    }
  };
};
