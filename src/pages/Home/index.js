import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import cart from '../../assets/icon/iconcart.png';

const Home = (props) => {
  return (
    <View style={styles.BarTop}>
      <TouchableOpacity>
        <View style={styles.FlexBoxBar}>
          <View style={styles.FlexBoxLine} />
          <View style={styles.FlexBoxLine} />
          <View style={styles.FlexBoxLine} />
        </View>
      </TouchableOpacity>
      <Text style={styles.TittleBar}>Tokone Wong</Text>
      <View style={styles.addWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <View style={styles.notif}>
          <Text style={styles.textNotif}>{props.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  textNotif: {
    fontSize: 10,
    fontWeight: '900',
    color: 'white',
    paddingHorizontal: 3,
  },
  notif: {
    backgroundColor: 'red',
    padding: 4,
    borderRadius: 5,
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    bottom: 30,
  },
  FlexBoxLine: {
    backgroundColor: 'black',
    width: 30,
    height: 4,
    marginVertical: 3,
  },
  FlexBoxBar: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  TittleBar: {
    marginVertical: 'auto',
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 18,
  },
  Bar: {
    flex: 1,
    height: 'auto',
  },
  addWrapper: {
    borderWidth: 1,
    borderColor: 'green',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {
    width: 20,
    height: 20,
  },
  BarTop: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1 / 6,
  },
});
