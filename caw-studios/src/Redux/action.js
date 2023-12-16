import {
  PRODUCT_DATA,
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  RIGHT_APPROVED,
  CROSS_MISSING_URGENT,
  CROSS_MISSING,
  ADD_PRODUCT,

} from "./actionType";
import axios from "axios";

//GET_PRODUCT
export const actionProductData = (pay) => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    let result = await axios(`https://mockapirevision.onrender.com/data`);

    dispatch({ type: PRODUCT_DATA, payload: result.data });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};

//Approved_Data;
export const actionApprovedData = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_LOADING });
  try {
    let updatedData = { status: "Approved" };
    let result = await axios.patch(
      `https://mockapirevision.onrender.com/data/${id}`,
      updatedData
    );

    dispatch({ type: RIGHT_APPROVED, payload: id });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};

//CrossData_Missing;

export const actionCrossDataMissing = (action) => async (dispatch) => {
  const id = +action.id; 

  console.log(action.id, typeof action.id);

  dispatch({ type: PRODUCT_LOADING });

  try {
    const updatedData = { status: "Missing" };
    const result = await axios.patch(
      `https://mockapirevision.onrender.com/data/${id}`,
      updatedData
    );

    dispatch({ type: CROSS_MISSING, payload: id });
  } catch (err) {
    console.error("Error updating status:", err);
    dispatch({
      type: PRODUCT_ERROR,
      payload: err.message || "An error occurred",
    });
  }
};

//CrossData_Missing Urgent;
export const actionCrossDataMissingUrgent = (action) => async (dispatch) => {
  const id = +action.id; 

  console.log(action.id, typeof action.id);

  dispatch({ type: PRODUCT_LOADING });
  dispatch({ type: PRODUCT_LOADING });
  try {
    let updatedData = { status: "Missing-urgent" };
    let result = await axios.patch(
      `https://mockapirevision.onrender.com/data/${id}`,
      updatedData
    );

    dispatch({ type: CROSS_MISSING_URGENT, payload: id });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};

//AddProduct
export const addPurchaseproduct = (payload) => async (dispatch) => {
  try {
    const endpoint = 'https://mockapirevision.onrender.com/data';

    const result = await axios.post(endpoint, payload);

    dispatch({ type: ADD_PRODUCT, payload: result.data });
    console.log("payload",payload);
  } catch (err) {
    console.error(err);
    dispatch({ type: PRODUCT_ERROR });
  }
};


