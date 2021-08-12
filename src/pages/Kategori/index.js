/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import macbook from '../../assets/image/macbook.jpeg';
import macbook2020 from '../../assets/image/macbook2020.jpg';
import iphone8 from '../../assets/image/iphone.jpeg';
import asusrog from '../../assets/image/asusrog.jpg';
import ipadpro from '../../assets/image/ipadpro.jpeg';
import iwacth from '../../assets/image/iwatch.jpg';
import headphone from '../../assets/image/headphone.jpg';
import bundle1 from '../../assets/image/bundle1.jpg';
import airpod from '../../assets/image/airpods.jpg';
import applepencil from '../../assets/image/applepencil.jpg';
import headphone1 from '../../assets/image/headphone1.jpg';
import macbook1 from '../../assets/image/macbook2.jpg';
import macbook2020v from '../../assets/image/macbook2020(1).jpg';
import airpod1 from '../../assets/image/aipods2.jpg';
import iphone8v from '../../assets/image/iphone1.jpg';
import asusrog1 from '../../assets/image/asusrog2.jpeg';
import iwatch1 from '../../assets/image/iwatch1.jpg';
import ipadpro1 from '../../assets/image/ipadpro1.jpg';
import bundle1v from '../../assets/image/bundle(1).jpg';
import applepencil1 from '../../assets/image/applepencil2.jpg';

const NamaProduk = (props) => {
  return (
    <View style={styles.categoryTitle}>
      <Text style={styles.text}>{props.categoryName}</Text>
      <TouchableOpacity>
        <Text style={styles.readmore}>Lihat lainnya</Text>
      </TouchableOpacity>
    </View>
  );
};

// const buttonChange = (props) => {
//   const
// };

const Produk = (props) => {
  const [propsimage, setPropsimage] = useState(
    <Image source={props.image} style={styles.imageMacbook} />,
  );
  return (
    <View style={styles.betweenItems}>
      <View>
        {propsimage}
        <View style={styles.buttonKategoriView}>
          <Text
            onPress={() =>
              setPropsimage(
                <Image source={props.image2} style={styles.imageMacbook} />,
              )
            }
          />
        </View>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 14}}>
        {props.productName}
      </Text>
      <Text
        style={{
          fontSize: 12,
          color: '#F2994A',
          marginTop: 12,
          fontWeight: 'bold',
        }}>
        {props.poductPrice}
      </Text>
      <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
        {props.Place}
      </Text>
      <View
        style={{
          backgroundColor: 'green',
          paddingVertical: 6,
          borderRadius: 25,
          marginVertical: 10,
          marginTop: 15,
        }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 14,
            color: 'white',
            textAlign: 'center',
          }}>
          Beli
        </Text>
      </View>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View
          style={{
            backgroundColor: 'green',
            paddingVertical: 6,
            borderRadius: 25,
            marginVertical: 5,
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 14,
              color: 'white',
              textAlign: 'center',
            }}>
            Tambah Keranjang
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Kategori = (props) => {
  return (
    <View>
      {/* Kategori Elektronik */}
      <View style={styles.category}>
        <NamaProduk categoryName="Barang Elektronik" />
        <ScrollView horizontal>
          <View style={styles.Items}>
            <Produk
              productName="New Macbook Pro 2019"
              poductPrice="RP. 25.000.000"
              image={macbook}
              image2={macbook1}
              Place="Jakarta Barat"
              onButtonPress={props.buttonPress}
            />
            <Produk
              productName="Ipad Pro 2020"
              poductPrice="RP. 14.000.000"
              image={ipadpro}
              image2={ipadpro1}
              Place="Semarang"
              onButtonPress={props.buttonPress}
            />
            <Produk
              productName="Iphone 8+"
              poductPrice="RP. 7.000.000"
              image={iphone8}
              image2={iphone8v}
              Place="Surabaya"
              onButtonPress={props.buttonPress}
            />
            <Produk
              productName="Asus ROG I9"
              poductPrice="RP. 15.000.000"
              image={asusrog}
              image2={asusrog1}
              Place="Batam"
              onButtonPress={props.buttonPress}
            />
            <Produk
              productName="New Macbook Pro 2020"
              poductPrice="RP. 41.000.000"
              image={macbook2020}
              image2={macbook2020v}
              Place="Jakarta Utara"
              onButtonPress={props.buttonPress}
            />
          </View>
        </ScrollView>
      </View>
      {/* Kategori Aksesoris */}
      <View style={styles.category}>
        <NamaProduk categoryName="Barang Aksesoris" />
        <ScrollView horizontal>
          <View style={styles.Items}>
            <Produk
              productName="Smart Watch"
              poductPrice="RP. 8.000.000"
              image={iwacth}
              image2={iwatch1}
              Place="Tanggerang Selatan"
              onButtonPress={props.buttonPress}
            />
            <Produk
              productName="Airpods Pro"
              poductPrice="RP. 2.400.000"
              image={airpod}
              image2={airpod1}
              Place="Semarang"
              onButtonPress={props.buttonPress}
            />
            <Produk
              productName="Headphone Plus"
              poductPrice="RP. 2.000.000"
              image={headphone}
              image2={headphone1}
              Place="Medan"
              onButtonPress={props.buttonPress}
            />
            <Produk
              productName="Apple Pencil Gen 2"
              poductPrice="RP. 2.500.000"
              image={applepencil}
              image2={applepencil1}
              Place="Bandung"
              onButtonPress={props.buttonPress}
            />
            <Produk
              productName="Paket Bundling 1"
              poductPrice="RP. 9.000.000"
              image={bundle1}
              image2={bundle1v}
              Place="Jakarta Selatan"
              onButtonPress={props.buttonPress}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonKategoriView: {
    alignSelf: 'center',
    backgroundColor: 'green',
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    marginVertical: 10,
  },
  readmore: {
    color: 'grey',
    fontSize: 12,
  },
  categoryTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  category: {
    flexDirection: 'column',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 5,
    textAlign: 'center',
  },

  imageMacbook: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  Items: {
    alignItems: 'center',
    padding: 2,
    flexDirection: 'row',
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  betweenItems: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
    margin: 10,
  },
});

export default Kategori;
