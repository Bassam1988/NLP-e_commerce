import axios from "axios";
import { createMessage, returnErrors } from "./messages";
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
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// Delete Product
export const delProduct = (id) => (dispatch) => {
  axios
    .delete(`/shop/product/${id}/`)
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
export const addProduct = (product) => (dispatch) => {
  console.log("addproduct");
  axios
    .post("/shop/product/", product)
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
