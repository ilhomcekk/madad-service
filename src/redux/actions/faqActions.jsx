import { toast } from "react-toastify";
import requests from "../../helpers/requests";

export const getDetailFaq = (id) => (dispatch) => {
  dispatch({ type: "fetch_detail_faq_start", payload: id });

  requests
    .getDetailFaq(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_detail_faq_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_detail_faq_error", payload: response });
    });
};

export const getFaq = (params) => (dispatch) => {
  dispatch({ type: "fetch_faq_start", payload: params });

  requests
    .getFaq(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_faq_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_faq_error", payload: response });
    });
};
