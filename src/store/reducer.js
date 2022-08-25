import Action from "./action";

const initialState = {
  fact: "",
  error: false,
  successMessage: "",
  errorMessage: "",
};

const FactReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.FETCH_FACT_SUCCESS:
      return {
        ...state,
        fact: action.payload.fact,
        error: false,
        successMessage: action.payload.successMessage,
        errorMessage: "",
      };
    case Action.FETCH_FACT_FAILED:
      return {
        ...state,
        fact: "",
        error: true,
        successMessage: "",
        errorMessage: Action.payload.errorMessage,
      };
    default:
      return state;
  }
};
export default FactReducer;
