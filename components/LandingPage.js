import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import Header from './Header';
import KeyBoxes from './KeyBoxes';
import {
  LandingAction,
  expressionAction,
  calculationAction,
  clearFunction,
  scientificButtonAction,
} from '../actions/LandingActions';
import {connect} from 'react-redux';

function LandingPage(props) {
  const [result, setResult] = useState(0);
  const [tempArr, setTempArr] = useState([]);
  const numberKeys = [
    1,
    2,
    3,
    '+',
    4,
    5,
    6,
    '-',
    7,
    8,
    9,
    '*',
    'clear',
    0,
    '=',
    '/',
  ];

  const clrExp = data => {
    props.clearFunction(props.evalExpression);
  };
  const evalExp = data => {
    console.log(typeof data, 'data in eval');
    if (!(props.evalExpression.length === 0 && typeof data !== 'number')) {
      if (
        !(
          typeof props.evalExpression[props.evalExpression.length - 1] !==
            'number' &&
          typeof data ===
            typeof props.evalExpression[props.evalExpression.length - 1]
        )
      ) {
        if (data !== '=') {
          if (tempArr.length === 0) {
            tempArr.push(data);
            props.expressionAction(tempArr, props.evalExpression, data);
          } else {
            let x = props.evalExpression;
            x.push(data);
            props.expressionAction(x, props.evalExpression, data);
          }
        } else if (data !== 'clear') {
          props.calculationAction(props.evalExpression);
        }
      }
    }
  };

  console.log(props, 'prop of redux');
  return (
    <View>
      <Header />
      <View
        style={{
          height: 70,
          borderColor: 'black',
          borderWidth: 2,
          margin: 2,
          padding: 2,
        }}>
        <Text style={{fontSize: 50, alignItems: 'flex-end'}}>
          {props.finalResult}
        </Text>
      </View>
      <View
        style={{
          height: 70,
          borderColor: 'black',
          borderWidth: 2,
          margin: 2,
          padding: 2,
        }}>
        <Text style={{fontSize: 50, alignItems: 'flex-end'}}>
          {props.initialize
            ? 0
            : props.evalExpression &&
              props.evalExpression.map((data, index) => (
                <Text key="index">{data}</Text>
              ))}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 10,
          bottom: 0,
        }}>
        {numberKeys.map(value => (
          <Text
            onPress={
              value !== 'clear' ? () => evalExp(value) : () => clrExp(value)
            }>
            <KeyBoxes value={value} />
          </Text>
        ))}
      </View>
    </View>
  );
}

const mapStateToProps = ({LandingReducers}) => {
  const {splBut, evalExpression, initialize} = LandingReducers;
  return {
    splBut,
    evalExpression,
    initialize,
  };
};

export default connect(mapStateToProps, {
  LandingAction,
  expressionAction,
  calculationAction,
  clearFunction,
  scientificButtonAction,
})(LandingPage);
