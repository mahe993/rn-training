import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {User} from '../AccountScreen';

type Props = {
  userDetails: User;
};

const AccountDetails = ({userDetails}: Props) => {
  return (
    <>
      <View style={[style.details]}>
        <Text style={[style.description]}>Name:</Text>
        <Text style={[style.text]}>{userDetails.name}</Text>
      </View>
      <View style={[style.details]}>
        <Text style={[style.description]}>Email:</Text>
        <Text style={[style.text]}>{userDetails.email}abcs</Text>
      </View>
      <View style={[style.details]}>
        <Text style={[style.description]}>Age:</Text>
        <Text style={[style.text]}>{userDetails.age}</Text>
      </View>
      {userDetails.phoneNumber && (
        <View style={[style.details]}>
          <Text style={[style.description]}>Phone No.:</Text>
          <Text style={[style.text]}>{userDetails.phoneNumber}</Text>
        </View>
      )}
    </>
  );
};

export default AccountDetails;

const style = StyleSheet.create({
  details: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  text: {
    minWidth: 150,
    color: 'black',
  },
  description: {
    minWidth: 100,
    textAlign: 'right',
    color: 'black',
  },
});
