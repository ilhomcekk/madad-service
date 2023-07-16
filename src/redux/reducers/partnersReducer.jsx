const INITIAL_STATE = {
  partners: [],
  data: {},
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "fetch_detail_partners_start":
      return { ...state, loading: true };
    case "fetch_detail_partners_error":
      return { ...state, loading: false };
    case "fetch_detail_partners_success":
      return {
        ...state,
        loading: false,
        data: payload.data,
      };

    case "fetch_partners_start":
      return { ...state, loading: true };
    case "fetch_partners_error":
      return { ...state, loading: false };
    case "fetch_partners_success":
      return {
        ...state,
        loading: false,
        partners: payload.data,
      };

    default:
      return state;
  }
};
