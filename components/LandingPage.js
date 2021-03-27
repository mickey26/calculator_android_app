import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import Header from './Header';
import KeyBoxes from './KeyBoxes';
import {clickAction} from '../actions/LandingActions';
import {connect} from 'react-redux';

function LandingPage(props) {
  const [result, setResult] = useState(0);
  const numberKeys = [
    {id: 'number', value: 1},
    {id: 'number', value: 2},
    {id: 'number', value: 3},
    {id: 'string', value: '+'},
    {id: 'number', value: 4},
    {id: 'number', value: 5},
    {id: 'number', value: 6},
    {id: 'string', value: '-'},
    {id: 'number', value: 7},
    {id: 'number', value: 8},
    {id: 'number', value: 9},
    {id: 'string', value: '*'},
    {id: 'string', value: 'clear'},
    {id: 'number', value: 0},
    {id: 'string', value: '='},
    {id: 'string', value: '/'},
    // '1',
    // '2',
    // '3',
    // '+',
    // '4',
    // '5',
    // '6',
    // '-',
    // '7',
    // '8',
    // '9',
    // '*',
    // 'clear',
    // '0',
    // '=',
    // '/',
  ];

  const displayHandle = data => {
    console.log(typeof data, 'displaydata ');
    props.clickAction(data.value);
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
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 10,
          bottom: 0,
        }}>
        {numberKeys.map(value => (
          <Text onPress={() => displayHandle(value)}>
            <KeyBoxes value={value.value} />
          </Text>
        ))}
      </View>
    </View>
  );
}

const mapStateToProps = ({landingReducers}) => {
  const {finalResult} = landingReducers;
  return {
    finalResult,
  };
};

export default connect(mapStateToProps, {clickAction})(LandingPage);
