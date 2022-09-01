export const initialState = {
  user: {},
  windowSize: {},
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_WINDOW_SIZE: "SET_WINDOW_SIZE",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return { ...state, user: action.user };
    case actionTypes.SET_WINDOW_SIZE:
      return { ...state, windowSize: action.size };
    default:
      return state;
  }
};
