import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkills} activeOpacity={0.8} {...rest}>
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
