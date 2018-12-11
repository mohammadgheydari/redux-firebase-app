const initState = {
  projects: [
    { id: "1", title: "help me find it", content: "lorem ipusm some text" },
    { id: "2", title: "help me find this", content: "lorem ipusm some text" },
    { id: "3", title: "help me find that", content: "lorem ipusm some text" }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create-project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create-project-error", action.err);
      return state;
    default:
      return state;
  }
};
export default projectReducer;
