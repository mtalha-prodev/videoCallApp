import {View, Text} from 'react-native';
import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';

const VideoScreen = () => {
  const [videoCall, setVideoCall] = useState(true);
  const connectionData = {
    appId: '80fe908f5da8461dafb0af0d9e5a8c36',
    channel: 'test',
  };
  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  ) : null;
};

export default VideoScreen;
