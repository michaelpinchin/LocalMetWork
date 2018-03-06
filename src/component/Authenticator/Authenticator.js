import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {
  Button,
  Spinner,
  CardSection
} from '../common';
import { MainFrame } from '../MainActivity';
import LoginForm from './LoginForm';

class Authenticator extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDWd2lNEez4jIqxJ3k-G97lfcr2myLbVhQ",
      authDomain: "metwork-0-01.firebaseapp.com",
      databaseURL: "https://metwork-0-01.firebaseio.com",
      projectId: "metwork-0-01",
      storageBucket: "metwork-0-01.appspot.com",
      messagingSenderId: "207354863072"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <View>
          <MainFrame />
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        </View>
      );
    case false:
      return <LoginForm />;
    default:
      return <Spinner size='large' />;
  }
}


    render() {
      return (
        <View>
          {this.renderContent()}
        </View>
      );
    }
}

export default Authenticator;
