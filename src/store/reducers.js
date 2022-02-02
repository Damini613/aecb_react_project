const initialState = {
  languageFlag: true
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "Arabic":
      return {
        newState: { ...state },
        languageFlag: !state.languageFlag
      };

    default:
      return state;
  }
};

export default reducers;
