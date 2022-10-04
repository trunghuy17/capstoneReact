import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { date } from "yup/lib/locale";
import { history } from "../..";
import {
  getStore,
  getStoreJSON,
  http,
  setStoreJSON,
  USER_LOGIN,
} from "../../util/config";

const initialState = {
  gioHang: [],
  order: {
    orderDetail: [
      {
        productId: "",
        quantity: "",
      },
    ],
    email: "",
  },
};

const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    tongSL: (state, actions) => {
      console.log({ actions });
      state.gioHang = actions.payload;
    },
    tangGiam: (state, actions) => {
      let { id, bool } = actions.payload;
      let index = state.gioHang.findIndex((sp) => sp.productId === id);
      if (bool) {
        state.gioHang[index].quantity += 1;
      } else if (state.gioHang[index].quantity > 1) {
        state.gioHang[index].quantity -= 1;
      }
    },
    addGiohang: (state, actions) => {
      // payload trả về 1 obj product detail
      let newProduct = actions.payload;
      let spGioHang = {
        productId: newProduct.id,
        name: newProduct.name,
        price: newProduct.price,
        image: newProduct.image,
        quantity: 1,
      };
      let index = state.gioHang.findIndex(
        (sp) => sp.productId === spGioHang.productId
      );
      if (index !== -1) {
        state.gioHang[index].quantity += 1;
      } else {
        state.gioHang.push(spGioHang);
      }
    },
    postOrderAction: (state, actions) => {
      state.gioHang = [];
    },
    deleteAction: (state, action) => {
      // let { id } = ;
      let id = action.payload;
      console.log({ action });
      let index = state.gioHang.findIndex((gh) => gh.productId === id);
      console.log({ index });
      if (index !== -1) {
        state.gioHang.splice(index, 1);
      }
      console.log(state.gioHang);
    },
  },
});

export const { tangGiam, tongSL, addGiohang, postOrderAction, deleteAction } =
  cartReducer.actions;

export default cartReducer.reducer;

// call api post order
export const postOrder = (value) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/order",
        method: "POST",
        data: value,
      });
      console.log(result.data.content);
      alert(result.data.content);
      const action = postOrderAction(value);
      dispatch(action);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};
