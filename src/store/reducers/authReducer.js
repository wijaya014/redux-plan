const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "login error",
      };
    case "LOGIN_SUKSES":
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
