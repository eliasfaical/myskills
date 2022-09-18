import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface ButtonPress extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: ButtonPress) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 45,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A370FE',
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
