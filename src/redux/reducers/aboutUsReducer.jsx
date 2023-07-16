const INITIAL_STATE = {
  aboutUs: [],
  data: {},
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "fetch_detail_aboutUs_start":
      return { ...state, loading: true };
    case "fetch_detail_aboutUs_error":
      return { ...state, loading: false };
    case "fetch_detail_aboutUs_success":
      return {
        ...state,
        loading: false,
        data: payload.data,
      };

    case "fetch_aboutUs_start":
      return { ...state, loading: true };
    case "fetch_aboutUs_error":
      return { ...state, loading: false };
    case "fetch_aboutUs_success":
      return {
        ...state,
        loading: false,
        aboutUs: payload.data,
      };

    default:
      return state;
  }
};
