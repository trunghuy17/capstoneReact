import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gioHang: [
    {
      id: 1,
      name: "Adidas Prophere",
      price: 350,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      price: 375,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
      quantity: 1,
    },
  ],
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
      console.log({ id, bool });
      console.log("id:", { ...state.gioHang[id] });
      let index = state.gioHang.findIndex((sp) => sp.id === id);
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
        id: newProduct.id,
        name: newProduct.name,
        price: newProduct.price,
        image: newProduct.image,
        quantity: 1,
      };
      let index = state.gioHang.findIndex((sp) => sp.id === spGioHang.id);
      console.log({ index });
      if (index !== -1) {
        state.gioHang[index].quantity += 1;
      } else {
        state.gioHang.push(spGioHang);
      }
    },
  },
});

export const { tangGiam, tongSL, addGiohang } = cartReducer.actions;

export default cartReducer.reducer;
