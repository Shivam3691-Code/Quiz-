// src/screens/AboutScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HTML Mastery with Quiz</Text>
      <Text style={styles.description}>
        Welcome to the HTML Mastery with Quiz app! This interactive learning experience is designed to take your HTML skills to the next level.
      </Text>
      <Text style={styles.description}>
        Whether you are a beginner looking to build a solid foundation or an experienced developer aiming to sharpen your skills, our quiz-based learning approach offers a fun and engaging way to master HTML concepts.
      </Text>
      <Text style={styles.description}>
        Key Features:
      </Text>
      <Text style={styles.feature}>
        🚀 Comprehensive HTML Curriculum
      </Text>
      <Text style={styles.feature}>
        🧠 Quiz-based Learning Approach
      </Text>
      <Text style={styles.feature}>
        🏆 Test Your Knowledge and Track Progress
      </Text>
      <Text style={styles.feature}>
        🎉 Celebrate Achievements with Animated Quizzes
      </Text>
      <Text style={styles.description}>
        Start your HTML journey today and become a master of web development! Get ready to explore the world of HTML, create stunning web pages, and challenge yourself with our exciting quizzes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'red', // Custom color
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
    textAlign: 'justify',
    color:'black'
  },
  feature: {
    fontSize: 16,
    marginBottom: 5,
    color: '#2ecc71', // Custom color
  },
});

export default AboutScreen;
