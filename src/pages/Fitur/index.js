/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

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
        <Text style={styles.titleJumbotron}>{props.namaItem}</Text>
      </View>
    </View>
  );
};

const Fitur = () => {
  return (
    <View>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <ProdukItem
            namaItem="Official Store"
            imageItem="https://img.icons8.com/doodle/100/000000/itunes-store.png"
          />
          <ProdukItem
            namaItem="Lihat Semua"
            imageItem="https://img.icons8.com/fluent/48/000000/show-all-views.png"
          />
          <ProdukItem
            namaItem="Elektronik"
            imageItem="https://img.icons8.com/fluent/48/000000/listening-to-music-on-headphones.png"
          />
          <ProdukItem
            namaItem="Top-Up & Tagihan"
            imageItem="https://img.icons8.com/fluent/48/000000/proforma-invoice.png"
          />
          <ProdukItem
            namaItem="Rumah Tangga"
            imageItem="https://img.icons8.com/color/48/000000/sofa.png"
          />
          <ProdukItem
            namaItem="Kesehatan"
            imageItem="https://img.icons8.com/dusk/64/000000/mental-health.png"
          />
          <ProdukItem
            namaItem="Keuangan"
            imageItem="https://img.icons8.com/doodle/48/000000/wallet--v1.png"
          />
          <ProdukItem
            namaItem="Travel & Entertaiment"
            imageItem="https://img.icons8.com/fluent/48/000000/travel-agency.png"
          />
          <ProdukItem
            namaItem="Fashion Wanita"
            imageItem="https://img.icons8.com/emoji/48/000000/dress.png"
          />
          <ProdukItem
            namaItem="Handphone & Tablet"
            imageItem="https://img.icons8.com/fluent/48/000000/smartphone-tablet.png"
          />
          <ProdukItem
            namaItem="Perawatan Hewan"
            imageItem="https://img.icons8.com/dusk/64/000000/pets.png"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Fitur;

const styles = StyleSheet.create({
  iteminJumbotron: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },
  titleJumbotron: {
    fontWeight: '300',
    maxWidth: 50,
    fontSize: 9,
    textAlign: 'center',
  },
  partofJumbotron: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoItem: {
    width: 30,
    height: 30,
    marginRight: 5,
    justifyContent: 'flex-start',
  },
});
