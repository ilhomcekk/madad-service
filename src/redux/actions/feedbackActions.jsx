import { toast } from "react-toastify";
import requests from "../../helpers/requests";

export const postFeedbackCreate = (id) => (dispatch) => {
  dispatch({ type: "post_feedback_create_start", payload: id });

  requests
    .postFeedbackCreate(id)
    .then(({ data }) => {
      dispatch({ type: "post_feedback_create_success", payload: data });
      toast.success("Успешно отправлено");
    })
    .catch(({ response }) => {
      dispatch({ type: "post_feedback_create_error", payload: response });
    });
};
