import { toast } from "react-toastify";
import requests from "../../helpers/requests";

export const getTariffsByCategory = (id, params) => (dispatch) => {
  dispatch({ type: "fetch_tariffs_by_category_start", payload: id, params });

  requests
    .getTariffsByCategory(id, params)
    .then(({ data }) => {
      dispatch({ type: "fetch_tariffs_by_category_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_tariffs_by_category_error", payload: response });
    });
};
