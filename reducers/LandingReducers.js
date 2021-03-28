const INITIAL_STATE = {
  evalExpression: [],
  initialize: true,
  nightMode: true,
};

export default function LandingReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'Handle Mode':
      return {
        ...state,
        nightMode: !action.payload,
      };
    case 'evaluating Expression':
      return {
        ...state,
        evalExpression: action.payload.finalArray,
        initialize: false,
      };
    case 'calculation action':
      return {
        ...state,
        evalExpression: action.payload,
        initialize: false,
      };
    case 'clear all state':
      return {
        evalExpression: [],
        initialize: true,
        nightMode: action.payload,
      };
    default:
      return state;
  }
}
