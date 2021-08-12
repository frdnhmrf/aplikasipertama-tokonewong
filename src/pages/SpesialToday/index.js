import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import specialToday1 from '../../assets/image/speacialtoday1.png';
import specialToday2 from '../../assets/image/spesialtoday2.jpg';
import specialToday3 from '../../assets/image/specialtoday3.jpg';
import specialToday4 from '../../assets/image/specialtoday4.jpg';

const ItemSpecialToday = (props) => {
  return (
    <View style={styles.mainImageToday}>
      <TouchableOpacity>
        <Image source={props.imageToday1} style={styles.imageToday} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={props.imageToday2} style={styles.imageToday} />
      </TouchableOpacity>
    </View>
  );
};

const SpecialToday = () => {
  return (
    <View>
      <Text style={styles.titleSpecialToday}>
        Spesial di Tokone Wong hari ini
      </Text>
      <View>
        <ItemSpecialToday
          imageToday1={specialToday1}
          imageToday2={specialToday2}
        />
      </View>
      <View>
        <ItemSpecialToday
          imageToday1={specialToday3}
          imageToday2={specialToday4}
        />
      </View>
    </View>
  );
};

export default SpecialToday;

const styles = StyleSheet.create({
  titleSpecialToday: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainImageToday: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  imageToday: {
    width: 180,
    height: 101,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
