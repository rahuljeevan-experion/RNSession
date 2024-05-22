import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TextInputComponent = () => {
  const [text, onChangeText] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
