import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.text}>
        Welcome to the Movies App! This application allows you to explore a variety of movies, view details, and manage your favorites.
      </Text>
      <Text style={styles.text}>
        This app utilizes the TMDb API to fetch movie data and Firebase for user Favorites.
      </Text>
      <Text style={styles.text}>
        Developed by ArwaElsaadawy. If you have any questions or feedback, feel free to contact me at arwaelsaadwy@gmail.com .
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
});

export default AboutScreen;
