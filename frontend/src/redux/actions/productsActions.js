import axios from "axios";
import createMessage from "./messages";
import * as actions from "./actionTypes";

// Get Products
export const getProducts = () => (dispatch) => {
  axios
    .get("/shop/showProduct/")
    .then((res) => {
      dispatch({
        type: actions.GET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Delete Product
export const delProduct = (id) => (dispatch) => {
  axios
    .delete(`/shop/product/${id}/`)
    .then((res) => {
      dispatch(createMessage({ ProductDelete: 'Product Deleted Successfully' }))
      dispatch({
        type: actions.DEL_PRODUCT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// Add Product
export const addProduct = (product) => (dispatch) => {
  console.log("addproduct");
  axios
    .post("/shop/product/", product)
    .then((res) => {
      dispatch(createMessage({ ProductAdd: 'Product Added Successfully' }))
      dispatch({
        type: actions.ADD_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: actions.GET_ERRORS,
        payload: errors,
      });
    });
};
