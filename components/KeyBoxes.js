import React from 'react';
import {Text, View} from 'react-native';

function KeyBoxes(props) {
  console.log('in keybox page');
  return (
    <View
      style={{
        height: 90,
        width: 120,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
        }}>
        {props.value}
      </Text>
    </View>
  );
}

export default KeyBoxes;
