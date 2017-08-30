// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component

const Header = () => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!!!</Text>
    </View>
    );
};

//Add styles here

const styles = {
  viewStyle: {
    backgroundColor: 'red'
  },
  textStyle: {
    fontSize: 30
  }
};

// Make Component available to other parts of the app

export default Header;
