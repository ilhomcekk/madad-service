import { toast } from "react-toastify";
import requests from "../../helpers/requests";

export const getDetailPartners = (id) => (dispatch) => {
  dispatch({ type: "fetch_detail_partners_start", payload: id });

  requests
    .getDetailPartners(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_detail_partners_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_detail_partners_error", payload: response });
    });
};

export const getPartners = (params) => (dispatch) => {
  dispatch({ type: "fetch_partners_start", payload: params });

  requests
    .getPartners(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_partners_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_partners_error", payload: response });
    });
};
