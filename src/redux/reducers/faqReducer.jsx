const INITIAL_STATE = {
  faq: [],
  data: {},
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "fetch_detail_faq_start":
      return { ...state, loading: true };
    case "fetch_detail_faq_error":
      return { ...state, loading: false };
    case "fetch_detail_faq_success":
      return {
        ...state,
        loading: false,
        data: payload.data,
      };

    case "fetch_faq_start":
      return { ...state, loading: true };
    case "fetch_faq_error":
      return { ...state, loading: false };
    case "fetch_faq_success":
      return {
        ...state,
        loading: false,
        faq: payload.data,
      };

    default:
      return state;
  }
};
