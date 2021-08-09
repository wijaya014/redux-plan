const initialState = {
  login_error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        login_error: "login error",
      };
    case "LOGIN_SUKSES":
      return {
        ...state,
        login_error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
