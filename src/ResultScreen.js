// src/screens/ResultScreen.js

import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

function ResultScreen({ route, navigation }) {
  const { score, totalQuestions } = route.params;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate the congratulatory message on component mount
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {score > 15 ? (
        <>
          <Animated.Text style={[styles.resultText, { opacity: fadeAnim }]}>
            Congratulations!
          </Animated.Text>
          <Text style={styles.scoreText}>{`Your Score: ${score}/${totalQuestions}`}</Text>
          <ConfettiCannon
            count={100}
            origin={{ x: -10, y: 0 }}
            explosionSpeed={300}
          />
        </>
      ) : (
        <>
          <LottieView
            source={require('../src/sad.json')} // Replace with your sad face animation
            autoPlay
            loop
            style={styles.sadFaceAnimation}
          />
          <Text style={styles.resultText}>Oops! Better luck next time.</Text>
          <Text style={styles.scoreText}>{`Your Score: ${score}/${totalQuestions}`}</Text>
        </>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2ecc71',
  },
  scoreText: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  sadFaceAnimation: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    width: '80%',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ResultScreen;
