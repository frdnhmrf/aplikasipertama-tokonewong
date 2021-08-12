import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from '../../assets/icon/iconcart.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>Materi Position React Native</Text>
      <View style={styles.cratWrapper}>
        <Image source={cart} style={styles.iconcart} />
        <Text style={styles.notif}>12</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
      <View style={styles.cratWrapper}>
        <Image
          source={{
            uri: 'https://img.icons8.com/fluent/100/000000/favorite-cart.png',
          }}
          style={styles.iconcart}
        />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Orang Lain</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {paddingHorizontal: 20, alignItems: 'center'},
  cratWrapper: {
    borderWidth: 1,
    borderColor: '#439BD1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
  },
  iconcart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 10},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 12,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 20,
    textAlign: 'center',
  },
});
