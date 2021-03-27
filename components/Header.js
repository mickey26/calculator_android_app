import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header() {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderText}>Easy Calculator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: 'black',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
    color: 'red',
    fontSize: 20,
  },
});

export default Header;
