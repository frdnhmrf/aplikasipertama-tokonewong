/* eslint-disable react-native/no-inline-styles */
import {Component, useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import React from 'react';

// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('===> constructor');
//     this.state = {
//       subscriber: 200,
//     };
//   }
//   componentDidMount() {
//     console.log('===> component did mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 400,
//       });
//     }, 2000);
//   }
//   componentDidUpdate() {
//     console.log('===> component did update');
//   }

//   componentWillUnmount() {
//     console.log('===> component will unmount');
//   }

//   render() {
//     console.log('===> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'lightgrey',
//             alignItems: 'flex-end',
//             justifyContent: 'space-around',
//           }}>
//           <View style={{backgroundColor: 'red', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'green', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'purple', width: 50, height: 50}} />
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//             padding: 10,
//             backgroundColor: 'grey',
//           }}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playllist</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             padding: 10,
//             marginTop: 20,
//           }}>
//           <Image
//             source={{uri: 'https://placeimg.com/100/100/people'}}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Ferdian Husnal Ma'ruf
//             </Text>
//             <Text>{this.state.subscriber} ribu subscribers</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, SetSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      SetSubscriber(400);
    }, 4000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);
  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     SetSubscriber(400);
  //   }, 2000);
  // }, [subscriber]);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'lightgrey',
          alignItems: 'flex-end',
          justifyContent: 'space-around',
        }}>
        <View style={{backgroundColor: 'red', width: 50, height: 50}} />
        <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
        <View style={{backgroundColor: 'green', width: 50, height: 50}} />
        <View style={{backgroundColor: 'purple', width: 50, height: 50}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
          backgroundColor: 'grey',
        }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playllist</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginTop: 20,
        }}>
        <Image
          source={{uri: 'https://placeimg.com/100/100/people'}}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Ferdian Husnal Ma'ruf
          </Text>
          <Text>{subscriber} ribu subscribers</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
