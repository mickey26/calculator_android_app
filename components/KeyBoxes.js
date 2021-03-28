import React from 'react';
import {Text, View} from 'react-native';

function KeyBoxes(props) {
  return (
    <View
      style={{
        height: 90,
        width: 120,
        margin: 40,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: '#A5ADAE',
          fontSize: 20,
        }}>
        {props.value}
      </Text>
    </View>
  );
}

export default KeyBoxes;
