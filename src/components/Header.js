import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Header = (props) => {
  const { headerContainer, headerText } = styles;
  return (
    <View style={headerContainer}>
      <Text style={headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    elevation: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 5
  },
  headerText: {
    fontSize: 20
  }
});

export default Header;
