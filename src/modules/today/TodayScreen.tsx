import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

enum Days {
  Mon = 'Monday',
  Tue = 'Tuesday',
  Wed = 'Wednesday',
  Thu = 'Thursday',
  Fri = 'Friday',
  Sat = 'Saturday',
  Sun = 'Sunday',
}

enum Suffix {
  Seventh,
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
}

const TodayScreen = () => {
  const [today, setToday] = useState<number>();
  const [todayString, setTodayString] = useState<string>();

  useEffect(() => {
    const newDay = new Date();
    const day = newDay.getDay(); // 3, 0 , 1
    const stringDay = Date().slice(0, 3) as keyof typeof Days; // "Wed"
    setToday(day);
    setTodayString(Days[stringDay]); // why cant reverse map string literal enums??
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        style={{
          color: 'black',
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Today is {'\n'}
        <Text style={{color: 'red'}}>{todayString}</Text>
        {'\n'}
        {today && `the ${Suffix[today]} day of the week!`}
      </Text>
    </View>
  );
};

export default TodayScreen;
