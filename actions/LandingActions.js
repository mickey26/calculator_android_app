export const clearFunction = data => {
  return dispatch => {
    dispatch({type: 'clear all state', payload: data});
  };
};

export const nightModeAction = data => {
  return dispatch => {
    dispatch({type: 'Handle Mode', payload: data});
  };
};

export const calculationAction = (finalArray, data) => {
  return dispatch => {
    let midResult = 0;
    let sign = finalArray[1];
    switch (sign) {
      case '+': {
        midResult = finalArray[0] + finalArray[2];
        finalArray = [];
        finalArray.push(midResult);
        break;
      }
      case '-': {
        midResult = finalArray[0] - finalArray[2];
        finalArray = [];
        finalArray.push(midResult);
        break;
      }
      case '*': {
        midResult = finalArray[0] * finalArray[2];
        finalArray = [];
        finalArray.push(midResult);
        break;
      }
      case '/': {
        midResult = finalArray[0] / finalArray[2];
        finalArray = [];
        finalArray.push(midResult);
        break;
      }
      default: {
      }
    }
    dispatch({type: 'calculation action', payload: finalArray});
  };
};

export const expressionAction = (arr, temp, x) => {
  return dispatch => {
    let finalArray = [];
    let temp = '';
    let midResult = 0;
    let strnumb = '';
    arr.forEach((data, index) => {
      if (typeof data === 'number') {
        var stnum = '';
        stnum = data;
        strnumb = stnum.toString();
        temp = temp.concat(strnumb);
        if (index === arr.length - 1) {
          finalArray.push(parseInt(temp));
        }
        midResult = finalArray[0];
      } else {
        finalArray.push(parseInt(temp));
        //finalArray.push(temp);
        temp = '';
        finalArray.push(data);
        midResult = finalArray[0];
      }
    });
    if (typeof x !== 'number') {
      if (finalArray.length > 3) {
        let midResult = finalArray[0];
        let sign = finalArray[1];
        switch (sign) {
          case '+': {
            midResult = finalArray[0] + finalArray[2];
            finalArray = [];
            finalArray.push(midResult);
            finalArray.push(x);
            break;
          }
          case '-': {
            midResult = finalArray[0] - finalArray[2];
            finalArray = [];
            finalArray.push(midResult);
            finalArray.push(x);
            break;
          }
          case '*': {
            midResult = finalArray[0] * finalArray[2];
            finalArray = [];
            finalArray.push(midResult);
            finalArray.push(x);
            break;
          }
          case '/': {
            midResult = finalArray[0] / finalArray[2];
            finalArray = [];
            finalArray.push(midResult);
            finalArray.push(x);
            break;
          }
          default: {
          }
        }
      }
    }
    dispatch({
      type: 'evaluating Expression',
      payload: {finalArray, midResult},
    });
  };
};
