import React, {useState} from 'react';
import {View, Text} from 'react-native';
import KeyBoxes from './KeyBoxes';
import {
  expressionAction,
  calculationAction,
  clearFunction,
  nightModeAction,
} from '../actions/LandingActions';
import {connect} from 'react-redux';

function LandingPage(props) {
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

  const handleNightMode = data => {
    props.nightModeAction(data);
  };
  const clrExp = data => {
    props.clearFunction(props.nightMode);
  };
  const evalExp = data => {
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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.nightMode ? '#3F4646' : '#ECF0F1',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View style={{width: '90%', borderColor: '#A5ADAE', width: '90%'}}>
        <Text
          style={{
            fontSize: 30,
            color: '#A5ADAE',
            padding: 10,
            alignSelf: 'flex-end',
            elevation: 2,
            borderWidth: 0.5,
            marginBottom: 450,
          }}
          onPress={() => handleNightMode(props.nightMode)}>
          {props.nightMode ? 'Day Mode' : 'Night Mode'}
        </Text>
      </View>
      <View
        style={{
          height: 70,
          borderColor: '#A5ADAE',
          backgroundColor: props.nightMode ? '#3F4646' : '#ECF0F1',
          borderBottomWidth: 1,
          margin: 2,
          padding: 2,
          width: '90%',
          padding: 10,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 20,
          alignItems: 'flex-end',
        }}>
        <Text style={{fontSize: 50, color: '#ED3A52'}}>
          {props.initialize
            ? 0
            : props.evalExpression &&
              props.evalExpression.map((data, index) => (
                <Text style={{color: '#ED3A52'}} key={index}>
                  {data}
                </Text>
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
          marginBottom: 20,
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
  const {evalExpression, initialize, nightMode} = LandingReducers;
  return {
    evalExpression,
    initialize,
    nightMode,
  };
};

export default connect(mapStateToProps, {
  expressionAction,
  calculationAction,
  clearFunction,
  nightModeAction,
})(LandingPage);
