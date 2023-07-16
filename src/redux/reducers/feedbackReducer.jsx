const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default (state = INITIAL_STATE, { type, payload, ...rest }) => {
  switch (type) {
    case "post_feedback_create_start":
      return { ...state, loading: true };
    case "post_feedback_create_error":
      return { ...state, loading: false };
    case "post_feedback_create_success":
      return {
        ...state,
        loading: false,
        data: payload.data,
      };

    default:
      return state;
  }
};
