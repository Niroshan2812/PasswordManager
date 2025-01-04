
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const Card = ({ email, username, onPress }) => {
  return (
    <View style={styles.card}>
    <Text style={styles.email}>Email: {email}</Text>
    <Text style={styles.username}>Username: {username}</Text>
    <CustomButton title="Press Me" onPress={onPress} />
  </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  email: {
    fontSize: 16,
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default Card;
