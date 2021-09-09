import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class FaceBook extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/1200px-Facebook_New_Logo_%282015%29.svg.png',
          }}
        />
        </View>
      );
    }
  }

  
const styles = StyleSheet.create({
    imageIcon: {
    width: 350,
    height: 125,
    marginLeft: 0,
  }
})