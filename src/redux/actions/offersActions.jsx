import { toast } from "react-toastify";
import requests from "../../helpers/requests";

export const getDetailOffers = (id) => (dispatch) => {
  dispatch({ type: "fetch_detail_offers_start", payload: id });

  requests
    .getDetailOffers(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_detail_offers_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_detail_offers_error", payload: response });
    });
};

export const getOffers = (params) => (dispatch) => {
  dispatch({ type: "fetch_offers_start", payload: params });

  requests
    .getOffers(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_offers_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_offers_error", payload: response });
    });
};
