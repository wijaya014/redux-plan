export const createProject = (project) => {
  return (dispatch, getState) => {
    //async db
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
