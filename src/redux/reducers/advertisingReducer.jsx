const INITIAL_STATE = {
  advertising: [],
  advertisingByCategory: [],
  data: {},
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "fetch_detail_advertising_start":
      return { ...state, loading: true };
    case "fetch_detail_advertising_error":
      return { ...state, loading: false };
    case "fetch_detail_advertising_success":
      return {
        ...state,
        loading: false,
        data: payload.data,
      };

    case "fetch_advertising_by_category_start":
      return { ...state, loading: true };
    case "fetch_advertising_by_category_error":
      return { ...state, loading: false };
    case "fetch_advertising_by_category_success":
      return {
        ...state,
        loading: false,
        advertisingByCategory: payload.data,
      };

    case "fetch_advertising_start":
      return { ...state, loading: true };
    case "fetch_advertising_error":
      return { ...state, loading: false };
    case "fetch_advertising_success":
      return {
        ...state,
        loading: false,
        advertising: payload.data,
      };

    default:
      return state;
  }
};
