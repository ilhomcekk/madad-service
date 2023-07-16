const INITIAL_STATE = {
  list: [],
  services: [],
  servicesByCategory: [],
  data: {},
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "fetch_detail_services_start":
      return { ...state, loading: true };
    case "fetch_detail_services_error":
      return { ...state, loading: false };
    case "fetch_detail_services_success":
      return {
        ...state,
        loading: false,
        data: payload.data,
      };

    case "fetch_services_by_category_start":
      return { ...state, loading: true };
    case "fetch_services_by_category_error":
      return { ...state, loading: false };
    case "fetch_services_by_category_success":
      return {
        ...state,
        loading: false,
        servicesByCategory: payload.data,
        list: payload.data,
      };

    case "fetch_services_start":
      return { ...state, loading: true };
    case "fetch_services_error":
      return { ...state, loading: false };
    case "fetch_services_success":
      return {
        ...state,
        loading: false,
        services: payload.data,
        list: payload.data,
      };

    default:
      return state;
  }
};
