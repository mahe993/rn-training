import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Tasks from './subComponents/Tasks';
import Section from './subComponents/Section';

const HomeScreen = (): JSX.Element => {
  const backgroundStyle = {
    backgroundColor: Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 20,
            marginTop: 20,
            minHeight: windowHeight * 0.6,
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Tasks
          </Text>
          <Tasks />
        </View>
        <View
          style={{
            backgroundColor: Colors.black,
          }}>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const windowHeight = Dimensions.get('window').height;

export default HomeScreen;
