//import librarys
import React from 'react';
import { Text, View } from 'react-native';
//component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.children}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',

    //justifyContent: up and down (flex-start, flex-end, center)
    justifyContent: 'center',
    //alignItems: horizontal left right (flex-start, flex-end, center)
    alignItems: 'center',

    height: 60,
    paddingTop: 15, // didn't use for android

    //SHADOW PROPS ONLY AVAILABLE ON IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,

    //elevation controlls shadow for anroid
    elevation: 4,
    position: 'relative',
  },

  //style for header text
  textStyle: {
    color: '#000',
    fontSize: 22
  }

};
//changed from: export default Name; : to accomidate index.js import structure
export { Header };
