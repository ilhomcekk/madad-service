import { toast } from "react-toastify";
import requests from "../../helpers/requests";

export const getDetailAdvertising = (id) => (dispatch) => {
  dispatch({ type: "fetch_detail_advertising_start", payload: id });

  requests
    .getDetailAdvertising(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_detail_advertising_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_detail_advertising_error", payload: response });
    });
};

export const getAdvertising = (params) => (dispatch) => {
  dispatch({ type: "fetch_advertising_start", payload: params });

  requests
    .getAdvertising(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_advertising_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_advertising_error", payload: response });
    });
};
