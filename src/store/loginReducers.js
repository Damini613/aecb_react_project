const initialState = {
  name: "",
  password: ""
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case "submit":
      return {
        newState: { ...state },
        languageFlag: !state.languageFlag
      };
    case "login_data":
      return {
        ...state,
        name: action.name
      };

    default:
      return state;
  }
};

export default loginReducers;
