export const clickAction = data => {
  console.log(data, 'data in action page');
  return dispatch => {
    dispatch({type: 'click', payload: data});
  };
};
