const initState = {
  projects: [
    { id: "1", title: "study cs", content: "learn from the net ninja" },
    { id: "2", title: "code", content: "code your way to the rock bottom" },
    { id: "3", title: "solve problems", content: "solve stupid problems" }
  ]
};
const projectReducer = (state = initState, action) => {
  return state;
};
export default projectReducer;
