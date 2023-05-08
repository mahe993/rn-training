import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(10);
  const interval = useRef<NodeJS.Timer>();

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => {
      if (interval.current !== undefined) {
        clearInterval(interval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (interval.current !== undefined && timer === 0) {
      clearInterval(interval.current);
    }
  }, [timer]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'red', fontSize: 80}}>{timer}</Text>
    </View>
  );
};

export default Timer;
