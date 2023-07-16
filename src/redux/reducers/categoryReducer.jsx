const INITIAL_STATE = {
  category: [],
  data: {},
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "fetch_detail_category_start":
      return { ...state, loading: true };
    case "fetch_detail_category_error":
      return { ...state, loading: false };
    case "fetch_detail_category_success":
      return {
        ...state,
        loading: false,
        data: payload.data,
      };

    case "fetch_category_start":
      return { ...state, loading: true };
    case "fetch_category_error":
      return { ...state, loading: false };
    case "fetch_category_success":
      return {
        ...state,
        loading: false,
        category: payload.data,
      };

    default:
      return state;
  }
};
