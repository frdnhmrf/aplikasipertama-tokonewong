/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ProdukItem = (props) => {
  return (
    <View style={styles.partofJumbotron}>
      <View style={styles.iteminJumbotron}>
        <Image
          source={{
            uri: props.imageItem,
          }}
          style={styles.logoItem}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.titleJumbotron}>{props.namaItem}</Text>
          <Text style={{color: 'green', fontSize: 10, fontWeight: 'bold'}}>
            {props.ketItem}
          </Text>
        </View>
      </View>
    </View>
  );
};
const Jumbotron = () => {
  return (
    <View style={{paddingHorizontal: 5, paddingVertical: 10}}>
      <View style={styles.JumbotronWrapper}>
        <View>
          <ProdukItem
            namaItem="RP0"
            ketItem="Top-up OVO"
            imageItem="https://img.icons8.com/nolan/50/transition-circle.png"
          />
          <ProdukItem
            namaItem="RP10.500"
            ketItem="(1.005 Points)"
            imageItem="https://img.icons8.com/clouds/100/000000/medal-window.png"
          />
        </View>
        <View>
          <ProdukItem
            namaItem="Bebas Ongkir"
            ketItem="3x Lagi"
            imageItem="https://img.icons8.com/color-glass/48/000000/free-shipping.png"
          />
          <ProdukItem
            namaItem="Silver"
            ketItem="20 Kupon"
            imageItem="https://img.icons8.com/plasticine/100/000000/membership-card.png"
          />
        </View>
      </View>
    </View>
  );
};

export default Jumbotron;

const styles = StyleSheet.create({
  titleJumbotron: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  partofJumbotron: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iteminJumbotron: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  JumbotronWrapper: {
    width: 'auto',
    height: 'auto',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },
  logoItem: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
