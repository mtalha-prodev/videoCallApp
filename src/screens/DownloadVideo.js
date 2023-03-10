import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import RNFetchBlob from 'rn-fetch-blob';

const DownloadVideo = () => {
  const [postUrl, setPostUrl] = useState(
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  );

  // android permition
  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Video App Storage Permission',
          message:
            'Video App needs access to your Storage ' +
            'so you can take awesome Video.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('You can use the Storage');
        videoDownload();
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
      console.log('errors');
    }
  };

  // video downloading
  const videoDownload = () => {
    const date = new Date();
    const {config, fs} = RNFetchBlob;
    const fileDir = fs.dirs.DownloadDir;
    config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          fileDir +
          '/download_' +
          Math.floor(
            date.getDate() + date.getMilliseconds() + date.getSeconds() / 2,
          ) +
          'mp4',
        description: 'video download',
      },
    })
      .fetch('GET', postUrl, {
        //some headers ..
      })
      .then(res => {
        // the temp file path
        console.log('The file saved to ', res.path());
        Alert.alert('Alert', 'Video Download Successfully ');
      });
  };

  return (
    <View style={style.container}>
      <TextInput
        placeholder="Enter video url "
        placeholderTextColor={'gray'}
        value={postUrl}
        onChangeText={text => setPostUrl(text)}
        style={style.input}
      />
      <TouchableOpacity
        style={style.btn}
        onPress={() => {
          if (postUrl !== '') {
            requestStoragePermission();
          } else {
            Alert.alert('Empty', 'Please Enter url !');
          }
        }}>
        <Text style={style.text}>Download Video</Text>
      </TouchableOpacity>
    </View>
  );
};

const {width} = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: width - 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: 'gray',
  },
  btn: {
    width: width - 20,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: 'orange',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default DownloadVideo;
