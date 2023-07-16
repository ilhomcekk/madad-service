import { toast } from "react-toastify";
import requests from "../../helpers/requests";

export const getDetailServices = (id) => (dispatch) => {
  dispatch({ type: "fetch_detail_services_start", payload: id });

  requests
    .getDetailServices(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_detail_services_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_detail_services_error", payload: response });
    });
};

export const getServicesByCategory = (id) => (dispatch) => {
  dispatch({ type: "fetch_services_by_category_start", payload: id });

  requests
    .getServicesByCategory(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_services_by_category_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_services_by_category_error", payload: response });
    });
};

export const getServices = (params) => (dispatch) => {
  dispatch({ type: "fetch_services_start", payload: params });

  requests
    .getServices(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_services_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_services_error", payload: response });
    });
};
