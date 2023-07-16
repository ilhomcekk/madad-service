const INITIAL_STATE = {
  tariffsByCategory: [],
  data: {},
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "fetch_tariffs_by_category_start":
      return { ...state, loading: true };
    case "fetch_tariffs_by_category_error":
      return { ...state, loading: false };
    case "fetch_tariffs_by_category_success":
      return {
        ...state,
        loading: false,
        tariffsByCategory: payload.data,
      };

    default:
      return state;
  }
};
