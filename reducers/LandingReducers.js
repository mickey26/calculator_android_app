const INITIAL_STATE = {
  finalResult: 0,
};

export default function landingReducers(state = INITIAL_STATE, action) {
  console.log(action, 'action in reducer');
  switch (action.type) {
    case 'click':
      return {
        finalResult: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
