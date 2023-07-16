import { toast } from "react-toastify";
import requests from "../../helpers/requests";

export const postCreateTelegram = (params) => (dispatch) => {
  dispatch({ type: "post_create_telegram_start", payload: params });

  requests
    .postCreateTelegram(params)
    .then(({ data }) => {
      dispatch({
        type: "post_create_telegram_success",
        payload: data,
      });
      toast.success("Успешно отправлено");
    })
    .catch(({ response }) => {
      dispatch({
        type: "post_create_telegram_error",
        payload: response,
      });
    });
};

export const setTarifStep = () => (dispatch) => {
  dispatch({ type: "set_tarif_step" });
};

export const backTarifStep = () => (dispatch) => {
  dispatch({ type: "back_tarif_step" });
};
