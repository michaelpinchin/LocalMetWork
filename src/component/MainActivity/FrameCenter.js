import React from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import { Card, CardSection } from '../common';

class FrameCenter extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(["Michael", "David", "Karan", "James", "Ryan", "Mitch", "Definitely Paige", "Maybe Kyle"]),
    };
  }

  render() {
    return (
      <Card>

        <CardSection>
          <ListView
            style={styles.container}
            dataSource={this.state.dataSource}
            renderRow={(data) => <View><Text>{data}</Text></View>}
          />
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
};

export { FrameCenter };
