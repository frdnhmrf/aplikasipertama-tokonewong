import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Home from './pages/Home';
import Jumbotron from './pages/Jumbotron';
import Fitur from './pages/Fitur';
import Event from './pages/Event';
import Shipping from './pages/Shipping';
import Kategori from './pages/Kategori';
// import FlexBox from './pages/FlexBox';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Menu from './pages/Menu';
import SpecialToday from './pages/SpesialToday';
// import Tabs from './pages/Tabs';

const App = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  // const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 8000);
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Home quantity={totalProduct} />
      </NavigationContainer>
      <ScrollView>
        <Shipping />
        <Jumbotron />
        <Fitur />
        <Event />
        {/* {isShow && <FlexBox />} */}
        {/* <SampleComponent /> */}
        <SpecialToday />
        <Kategori buttonPress={() => setTotalProduct(totalProduct + 1)} />
      </ScrollView>
      {/* <NavigationContainer>
        <Tabs />
      </NavigationContainer> */}
      <Menu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
