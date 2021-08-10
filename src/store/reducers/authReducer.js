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
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("logout success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("Signup error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
