import { toast } from "react-toastify";
import requests from "../../helpers/requests";

export const getDetailAboutUs = (id) => (dispatch) => {
  dispatch({ type: "fetch_detail_aboutUs_start", payload: id });

  requests
    .getDetailAboutUs(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_detail_aboutUs_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_detail_aboutUs_error", payload: response });
    });
};

export const getAboutUs = (params) => (dispatch) => {
  dispatch({ type: "fetch_aboutUs_start", payload: params });

  requests
    .getAboutUs(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_aboutUs_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_aboutUs_error", payload: response });
    });
};
