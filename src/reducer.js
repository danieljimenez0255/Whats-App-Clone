export const initialState = {
  user: null,
  lastMessage: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_LAST_MESSAGE: "SET_LAST_MESSAGE",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_LAST_MESSAGE:
      return {
        ...state,
        lastMessage: action.lastMessage,
      };

    default:
      return state;
  }
};

export default reducer;
