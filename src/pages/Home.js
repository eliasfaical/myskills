import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, FlatList} from 'react-native';
import {SkillCard} from '../components/SkillCard';
import {Button} from '../components/Button';

export function Home() {
  const [newSkills, setNewSkills] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkills() {
    setMySkills(oldState => [...oldState, newSkills]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Elias!</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor="#555"
        placeholder="My skills"
        onChangeText={setNewSkills}
      />

      <Button onPress={handleAddNewSkills} />

      <Text style={[styles.title, {marginVertical: 30, fontSize: 20}]}>
        My skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 70,
    backgroundColor: '#1f1e25',
  },

  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  input: {
    color: '#FFF',
    padding: 10,
    height: 45,
    marginTop: 20,
    fontSize: 16,
    borderRadius: 5,
    backgroundColor: '#333',
  },
});
