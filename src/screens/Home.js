import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const {width} = Dimensions.get('screen');

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('Download')}>
        <Text style={style.text}>Download Video</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.btn}
        onPress={() => navigation.navigate('Video')}>
        <Text style={style.text}>Video Call</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'orange',
    width: width - 30,
    padding: 12,
    borderRadius: 25,
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default Home;
