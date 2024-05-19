import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {LongParagraph} from '../../utils/constants';

const ScrollViewComponent = () => {
  return (
    <SafeAreaView style={styles.flexOne}>
      <View style={styles.flexOne}>
        <ScrollView>
          <Text>{LongParagraph}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});

export default ScrollViewComponent;
