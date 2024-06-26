import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import TextComponent from '../TextComponent';
import ImageComponent from '../ImageComponent';
import ScrollViewComponent from '../ScrollViewComponent';
import FlatListComponent from '../FlatListComponent';
import ButtonComponent from '../ButtonComponent';
import TextInputComponent from '../TextInputComponent';
import UseEffectExample from '../UseEffectExample';

const ViewComponent = () => {
  return (
    <SafeAreaView style={styles.flexOne}>
      <View style={styles.container}>
        {/* <TextComponent /> */}
        {/* <ImageComponent /> */}
        {/* <ScrollViewComponent /> */}
        {/* <FlatListComponent /> */}
        {/* <ButtonComponent /> */}
        {/* <TextInputComponent /> */}
        <UseEffectExample />
      </View>
    </SafeAreaView>
  );
};

export default ViewComponent;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
