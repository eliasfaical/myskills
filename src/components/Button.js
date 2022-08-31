import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function Button({onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText}>Adicionar</Text>
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
