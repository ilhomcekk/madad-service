const INITIAL_STATE = {
  offers: [],
  data: {},
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "fetch_detail_offers_start":
      return { ...state, loading: true };
    case "fetch_detail_offers_error":
      return { ...state, loading: false };
    case "fetch_detail_offers_success":
      return {
        ...state,
        loading: false,
        data: payload.data,
      };

    case "fetch_offers_start":
      return { ...state, loading: true };
    case "fetch_offers_error":
      return { ...state, loading: false };
    case "fetch_offers_success":
      return {
        ...state,
        loading: false,
        offers: payload.data,
      };

    default:
      return state;
  }
};
