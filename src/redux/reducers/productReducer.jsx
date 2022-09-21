import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";

const initialState = {
  arrProduct: [],
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (state, actions) => {
      state.arrProduct = actions.payload;
    },
  },
});

export const { setArrProductAction } = productReducer.actions;

export default productReducer.reducer;
// --------------------Action thunk (api)--------

export const getProductApi = () => {
  return async (dispatch) => {
    try {
      //Call api
      const result = await http.get("/Product");
      // Lấy dữ liệu về đưa lên redux
      const action = setArrProductAction(result.data.content);
      console.log(action);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};
