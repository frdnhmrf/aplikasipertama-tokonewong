/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Shipping = () => {
  return (
    <View>
      <View style={styles.shippingMain}>
        <Image
          source={{
            uri: 'https://img.icons8.com/color/48/000000/previous--location.png',
          }}
          style={styles.shippingImage}
        />
        <Text style={{fontSize: 12}}>Dikirim ke</Text>
        <Text style={styles.shippingText}>Ferdian Husnal Ma'ruf</Text>
      </View>
    </View>
  );
};

export default Shipping;

const styles = StyleSheet.create({
  shippingText: {fontSize: 12, color: 'black', fontWeight: 'bold', margin: 5},
  shippingImage: {width: 30, height: 30, marginRight: 5},
  shippingMain: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
});
