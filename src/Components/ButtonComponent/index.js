import React from 'react';
import {
  Alert,
  Button,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Pressable,
  TouchableHighlight,
} from 'react-native';

const ButtonComponent = () => {
  const _onButtonCicked = () => {
    _onPress('Default button clicked');
  };

  const _onTouchableOpacityPress = () => {
    _onPress('TouchableOpacity button clicked');
  };
  const _onTouchableWithoutFeedbackPress = () => {
    _onPress('TouchableWithoutFeedback button clicked');
  };

  const _onPressablePress = () => {
    _onPress('Pressable button clicked');
  };

  const _onPress = label => {
    Alert.alert('Session', label, [
      {
        onPress: () => {
          console.log('on ok press');
        },
        text: 'Okay',
      },
      {
        onPress: null,
        style: 'cancel',
        text: 'cancel',
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Button onPress={_onButtonCicked} title="Default button" />
      <TouchableOpacity
        style={styles.commonButtonStyle}
        onPress={_onTouchableOpacityPress}>
        <Text>TouchableOpacity Button</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={_onTouchableWithoutFeedbackPress}>
        <View style={styles.commonButtonStyle}>
          <Text>TouchableWithoutFeedback Button</Text>
        </View>
      </TouchableWithoutFeedback>
      <Pressable style={styles.commonButtonStyle} onPress={_onPressablePress}>
        <Text>Pressable Button</Text>
      </Pressable>
      <TouchableHighlight
        style={styles.commonButtonStyle}
        activeOpacity={0.6}
        underlayColor="red"
        // eslint-disable-next-line no-alert
        onPress={() => alert('TouchableHighlight Pressed!')}>
        <Text>TouchableHighlight Button</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ButtonComponent;

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
  },
});
