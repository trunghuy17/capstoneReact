import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { http } from "../../util/config";

const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (state, actions) => {
      state.arrProduct = actions.payload;
    },
    setPoductDetailAction: (state, action) => {
      state.productDetail = action.payload;
    },
  },
});

export const { setArrProductAction, setPoductDetailAction } =
  productReducer.actions;

export default productReducer.reducer;
// --------------------Action thunk (api)--------

export const getProductApi = () => {
  return async (dispatch) => {
    try {
      //Call api
      const result = await http.get("/Product");
      // Lấy dữ liệu về đưa lên redux
      const action = setArrProductAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

// Call api getById
export const getById = (params) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
        method: "GET",
      });
      const action = setPoductDetailAction(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
