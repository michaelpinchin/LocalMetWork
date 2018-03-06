import React from 'react';
import { View } from 'react-native';
import { } from './component/common';
//import { MainFrame } from './component/MainActivity';
import Authenticator from './component/Authenticator/Authenticator';
import ProjectHeader from './component/ProjectHeader';

const App = () => {
  return (
    <View>
      <ProjectHeader />
      <Authenticator />
    </View>
  );
};

export default App;
