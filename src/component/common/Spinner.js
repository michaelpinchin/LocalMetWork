import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
      {
        //if a prop is passed use the prop (size in this case) or (else) use large
      }
    </View>
  );
};

const styles = {
spinnerStyle: {
flex: 1,
justifyContent: 'center',
alignItems: 'center'
  }
};

export { Spinner };
