import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from '../common';

class LoginForm extends Component {
  state = {
     email: '',
     password: '',
     error: '',
     loading: false
  };

onButtonPress() {
  const { email, password } = this.state;

  this.setState({ error: '', loading: true });
//attempt to log in
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(this.onLoginSuccess.bind(this))
  //if fail catch and try to create account
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
  //if fail create account display failure
      .catch(this.onLoginFail.bind(this));
        });
}

onLoginFail() {
  this.setState({
    error: 'Authentication Fail',
    loading: false
  });
}

onLoginSuccess() {
  this.setState({
    error: '',
    loading: false,
    email: '',
    password: ''
  });
}

//helper method to decide if render login button or loading circle
renderButton() {
  if (this.state.loading) {
    return <Spinner size='small' />;
    }
  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Login
    </Button>
  );
}

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label='Email'
            placeholder='user@testing.com'
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label='Password'
            placeholder='password'
            secureTextEntry //boolean, if this isn't included returns undefined
          />
        </CardSection>

        <CardSection>
        {//call helpMethod from above
        }
          {this.renderButton()}
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

      </Card>
    );
  }
}

const styles = {
errorTextStyle: {
  fontSize: 16,
  alignSelf: 'center',
  color: '#F26C6C'
  }
};

export default LoginForm;
