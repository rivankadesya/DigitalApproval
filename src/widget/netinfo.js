import React, {useState, useEffect} from 'react';
import styles from '../screen/styles';
import {Text, View} from 'react-native';

import NetInfo from '@react-native-community/netinfo';

const Netinfo = () => {
  const [netInfo, setNetInfo] = useState('');

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(
        `Connection type: ${state.type} 
            Is connected?: ${state.isConnected}
            IP Address: ${state.details.ipAddress}`,
      );
    });

    return () => {
      // Unsubscribe to network state updates
      unsubscribe();
    };
  }, []);

  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then(state => {
      alert(
        `Connection type: ${state.type}
            Is connected?: ${state.isConnected}
            IP Address: ${state.details.ipAddress}`,
      );
    });
  };
  return <Text>{netInfo}</Text>;
};

export default Netinfo;
