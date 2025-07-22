export const userReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { fullName: action.fullName, cellNumber: action.cellNumber },
      ];
    case "randUser":
      return action.userList[action.rand];
    default:
      return state;
  }
};
