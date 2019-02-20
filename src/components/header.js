// Import library for making a Component
import React from 'react';
import { Text, View } from 'react-native';

// Create a Component

//const Header = () => <View><Text style={{ color: 'white' }} >Albums!</Text></View>;
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}><Text style={textStyle}>{ props.headerText }</Text></View>
  );
};

const styles = {

  viewStyle: {
    backgroundColor: 'teal',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    paddingTop: 30,
    shadowColor: 'yellow',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5
  },
  textStyle: {
    fontSize: 50,
    color: 'white'
  }
};

// Make the component avaialble to other parts of the App
export default Header;
