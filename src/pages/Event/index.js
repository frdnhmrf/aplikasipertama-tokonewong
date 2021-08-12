import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import eventof1 from '../../assets/image/eventImage1.png';
import eventof2 from '../../assets/image/eventImage2.jpg';
import eventof3 from '../../assets/image/eventImage3.jpg';

const NameEvent = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <Image source={props.eventImage} style={styles.eventItem} />
      </View>
    </TouchableOpacity>
  );
};

const Event = () => {
  return (
    <View>
      <ScrollView horizontal>
        <View style={styles.eventView}>
          <NameEvent eventImage={eventof1} />
          <NameEvent eventImage={eventof2} />
          <NameEvent eventImage={eventof3} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  eventView: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventItem: {
    width: 340,
    height: 130,
    borderRadius: 8,
    margin: 5,
  },
});
