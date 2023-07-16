const INITIAL_STATE = {
  news: [],
  newsBySearch: [],
  newsBySearchPagination: {},
  pagination: {},
  data: {},
  commentData: {},
  step: false,
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "post_create_comment_for_news_start":
      return { ...state, loading: true, step: false };
    case "post_create_comment_for_news_error":
      return { ...state, loading: false, step: false };
    case "post_create_comment_for_news_success":
      return {
        ...state,
        loading: false,
        step: true,
        commentData: payload.data,
      };

    case "fetch_detail_news_start":
      return { ...state, loading: true };
    case "fetch_detail_news_error":
      return { ...state, loading: false };
    case "fetch_detail_news_success":
      return {
        ...state,
        loading: false,
        data: payload.data,
      };

    case "fetch_news_by_search_start":
      return { ...state, loading: true };
    case "fetch_news_by_search_error":
      return { ...state, loading: false };
    case "fetch_news_by_search_success":
      return {
        ...state,
        loading: false,
        newsBySearchPagination: payload._meta,
        newsBySearch: payload.data,
      };

    case "fetch_news_start":
      return { ...state, loading: true };
    case "fetch_news_error":
      return { ...state, loading: false };
    case "fetch_news_success":
      return {
        ...state,
        loading: false,
        pagination: payload._meta,
        news: payload.data,
      };

    default:
      return state;
  }
};
