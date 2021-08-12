import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MenuItems = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemsBar}>
        <Image source={{uri: props.imageItems}} style={styles.imageStyle} />
        <Text style={styles.nameMenu}>{props.nameMenu}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Menu = () => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.Bar}>
        <View style={styles.menuBar}>
          <MenuItems
            nameMenu="Home"
            imageItems="https://img.icons8.com/ultraviolet/48/000000/home.png"
          />
          <MenuItems
            nameMenu="Feed"
            imageItems="https://img.icons8.com/dusk/40/000000/activity-feed.png"
          />
          <MenuItems
            nameMenu="Official Store"
            imageItems="https://img.icons8.com/doodle/100/000000/itunes-store.png"
          />
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 1,
    marginTop: 10,
  },
  itemsBar: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  Bar: {
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 20,
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
  nameMenu: {
    fontSize: 12,
    fontWeight: '300',
    maxWidth: 40,
    textAlign: 'center',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
