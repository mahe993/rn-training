import {View, Text} from 'react-native';
import React from 'react';

import ContactForm from '../components/ContactForm';

const ContactScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
        Contact Us:
      </Text>
      <ContactForm />
    </View>
  );
};

export default ContactScreen;
