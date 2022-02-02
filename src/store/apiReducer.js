const initialState = {
  apiData: []
};

const apiReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case "RECEIVE_API":
      return {
        ...state,
        apiData: data
      };

    default:
      return state;
  }
};

export default apiReducer;
