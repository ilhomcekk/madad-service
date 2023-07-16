import { toast } from "react-toastify";
import requests from "../../helpers/requests";

export const getDetailCategory = (id) => (dispatch) => {
  dispatch({ type: "fetch_detail_category_start", payload: id });

  requests
    .getDetailCategory(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_detail_category_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_detail_category_error", payload: response });
    });
};

export const getCategory = (params) => (dispatch) => {
  dispatch({ type: "fetch_category_start", payload: params });

  requests
    .getCategory(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_category_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_category_error", payload: response });
    });
};
