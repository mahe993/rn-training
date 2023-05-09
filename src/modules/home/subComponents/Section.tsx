import {View, Text, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Section = ({children, title}: SectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.white,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.light,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'italic',
  },
  highlight: {
    fontWeight: '700',
  },
});
