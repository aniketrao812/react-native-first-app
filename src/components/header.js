// Import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

//Make a Component

const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{ props.headerText }</Text>
    </View>
    );
};

//Add styles here

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 30
  }
};

// Make Component available to other parts of the app

export default Header;
