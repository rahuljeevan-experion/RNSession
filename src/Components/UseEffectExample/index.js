import React, {useEffect, useState} from 'react';
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Counter from '../Counter';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const [keyboardStatus, setKeyboardStatus] = useState('');

  useEffect(() => {
    console.log('on mount');
  }, []);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    console.log('on count update');
  }, [count]);

  const _onKBDismiss = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Text>UseEffectExample</Text>
      <Counter count={count} updateCount={setCount} />

      <TextInput
        placeholder="click here"
        value={input}
        onChangeText={setInput}
      />
      <Button onPress={_onKBDismiss} title="Dismiss keyboard" />
      <Text>{keyboardStatus}</Text>
    </View>
  );
};

export default UseEffectExample;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
});
