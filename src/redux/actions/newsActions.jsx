import requests from "../../helpers/requests";
import { toast } from "react-toastify";

export const postCreateCommentForNews = (id, params) => (dispatch) => {
  dispatch({ type: "post_create_comment_for_news_start", payload: id, params });

  requests
    .postCreateCommentForNews(id, params)
    .then(({ data }) => {
      dispatch({ type: "post_create_comment_for_news_success", payload: data });
      toast.success("Успешно добавлено");
    })
    .catch(({ response }) => {
      dispatch({
        type: "post_create_comment_for_news_error",
        payload: response,
      });
    });
};

export const getDetailNews = (id) => (dispatch) => {
  dispatch({ type: "fetch_detail_news_start", payload: id });

  requests
    .getDetailNews(id)
    .then(({ data }) => {
      dispatch({ type: "fetch_detail_news_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_detail_news_error", payload: response });
    });
};

export const getNewsBySearch = (query, params) => (dispatch) => {
  dispatch({ type: "fetch_news_by_search_start", payload: query, params });

  requests
    .getNewsBySearch(query, params)
    .then(({ data }) => {
      dispatch({ type: "fetch_news_by_search_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_news_by_search_error", payload: response });
    });
};

export const getNews = (params) => (dispatch) => {
  dispatch({ type: "fetch_news_start", payload: params });

  requests
    .getNews(params)
    .then(({ data }) => {
      dispatch({ type: "fetch_news_success", payload: data });
    })
    .catch(({ response }) => {
      dispatch({ type: "fetch_news_error", payload: response });
    });
};
