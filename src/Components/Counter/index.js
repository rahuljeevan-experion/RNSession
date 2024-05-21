import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = ({count, updateCount}) => {
  const _onDecrement = () => {
    updateCount(count - 1);
  };

  return (
    <View style={styles.center}>
      <Text>{`Counter : ${count}`}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.commonButtonStyle, styles.redBorder]}
          onPress={_onDecrement}>
          <Text>Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.commonButtonStyle, styles.greenBorder]}
          onPress={_onDecrement}>
          <Text>Increment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  commonButtonStyle: {
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
  },
  redBorder: {
    borderColor: 'red',
  },
  greenBorder: {
    borderColor: 'green',
  },
  center: {
    alignItems: 'center',
  },
});
