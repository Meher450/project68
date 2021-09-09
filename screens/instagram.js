import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class InstaGram extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://new-img.patrika.com/upload/2020/12/31/instagram_6603306-m.png',
          }}
        />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    imageIcon: {
    width: 300,
    height: 300,
    marginLeft: 0,
  }
})

