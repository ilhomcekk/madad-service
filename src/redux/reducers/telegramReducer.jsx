const INITIAL_STATE = {
  data: {},
  step: false,
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "post_create_telegram_start":
      return { ...state, loading: true };
    case "post_create_telegram_error":
      return { ...state, loading: false };
    case "post_create_telegram_success":
      return {
        ...state,
        loading: false,
        step: false,
      };

    case "set_tarif_step":
      return {
        ...state,
        step: true,
      };

    case "back_tarif_step":
      return {
        ...state,
        step: false,
      };

    default:
      return state;
  }
};
