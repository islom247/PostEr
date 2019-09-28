export const createProject = project => {
  return (dispatch, state, { getFirebase, getFirestore }) => {
    //make async call to database
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
