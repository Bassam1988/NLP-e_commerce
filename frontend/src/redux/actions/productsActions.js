import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import {tokenConfig} from './auth'
import * as actions from "./actionTypes";

// Get Products
export const getProducts = () => (dispatch,getState) => {
  axios
    .get("/shop/showProduct/",tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: actions.GET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Product
export const delProduct = (id) => (dispatch,getState) => {
  axios
    .delete(`/shop/product/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(
        createMessage({ ProductDelete: "Product Deleted Successfully" })
      );
      dispatch({
        type: actions.DEL_PRODUCT,
        payload: id,
      });
    })
    .catch((err) =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};

// Add Product
export const addProduct = (product) => (dispatch,getState) => {
  console.log("addproduct");
  axios
    .post("/shop/product/", product,tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ ProductAdd: "Product Added Successfully" }));
      dispatch({
        type: actions.ADD_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) =>
    dispatch(returnErrors(err.response.data, err.response.status))
  );
};
