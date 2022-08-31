import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkills} activeOpacity={0.8}>
      <Text style={styles.textSkills}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkills: {
    borderRadius: 30,
    backgroundColor: '#333',
    paddingVertical: 10,
    marginVertical: 5,
    alignItems: 'center',
  },

  textSkills: {
    fontSize: 16,
    color: '#FFF',
  },
});
