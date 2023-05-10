import {View, Button, Image} from 'react-native';
import React, {useState} from 'react';
import useCheckAuth from '../../hooks/useCheckAuth';

const DogPicture = () => {
  const [source, setSource] = useState<string>('');

  // protected route. navigates to Login screen if user is not logged in
  useCheckAuth();

  const getDogPicture = async (): Promise<void> => {
    const data = await fetch('https://dog.ceo/api/breeds/image/random');
    const res = await data.json();
    setSource(res.message);
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Button title="GET DOG" onPress={getDogPicture} />
      {source && (
        <Image source={{uri: source}} style={{width: '100%', height: 500}} />
      )}
    </View>
  );
};

export default DogPicture;
