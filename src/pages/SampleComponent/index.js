/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 390, height: 35, backgroundColor: 'yellow'}} />
      <NamaFull />
      <Text>Indonesia</Text>
      <Text>Merdeka Merah Putih</Text>
      <Photo />
      <TextInput style={{borderWidth: 1, height: 50}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const NamaFull = () => {
  return <Text>Ferdian Husnal Ma'ruf</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Masukkan tulisan sesuka anda</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 12}}>
        <View>
          <Image
            source={{uri: 'https://placeimg.com/100/100/animals'}}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
          />
        </View>
        <Text style={{color: 'blue', fontSize: 24}}>Ini Hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
