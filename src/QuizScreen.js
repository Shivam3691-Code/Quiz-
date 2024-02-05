// src/screens/QuizScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function QuizScreen({ navigation }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const questions = [
    // Add your quiz questions here
    // Example: { question: "What is 1 + 1?", options: ["2", "3", "4"], correctAnswer: "2" }
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyper>"],
      correctAnswer: "<a>"
      },
      
      {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Highly Textual Modern Language", "Hyper Transferable Text Language", "Hyperlink and Text Management Language"],
      correctAnswer: "Hyper Text Markup Language"
      },
      
      {
      question: "Which attribute is used to define inline styles in HTML?",
      options: ["style", "class", "css", "design"],
      correctAnswer: "style"
      },
      
      {
      question: "In HTML, which tag is used to define the structure of an HTML document?",
      options: ["<head>", "<body>", "<html>", "<structure>"],
      correctAnswer: "<html>"
      },
      
      {
      question: "What does the 'alt' attribute in the <img> tag stand for?",
      options: ["Alternative", "Altitude", "Alter", "Attribute"],
      correctAnswer: "Alternative"
      },
      
      {
      question: "Which HTML tag is used for creating an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correctAnswer: "<ul>"
      },
      
      {
      question: "What is the purpose of the HTML <head> element?",
      options: ["To define the body of the HTML document", "To define metadata about the HTML document", "To create a heading for the document", "To specify the page title"],
      correctAnswer: "To define metadata about the HTML document"
      },
      
      {
      question: "Which tag is used for creating a line break in HTML?",
      options: ["<br>", "<lb>", "<break>", "<linebreak>"],
      correctAnswer: "<br>"
      },
      
      {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
      },
      
      {
      question: "Which HTML tag is used for creating a table?",
      options: ["<table>", "<tr>", "<td>", "<tab>"],
      correctAnswer: "<table>"
      },
      
      {
      question: "In HTML, what does the <meta> tag provide information about?",
      options: ["Text formatting", "Document structure", "Metadata about the HTML document", "Table properties"],
      correctAnswer: "Metadata about the HTML document"
      },
      
      {
      question: "What is the purpose of the HTML <footer> element?",
      options: ["To define a section of navigation links", "To create a footer for the page", "To specify the page title", "To define metadata about the HTML document"],
      correctAnswer: "To create a footer for the page"
      },
      
      {
      question: "Which attribute is used to specify the input type in an HTML <input> element?",
      options: ["type", "value", "input-type", "format"],
      correctAnswer: "type"
      },
      
      {
      question: "How do you create a comment in HTML?",
      options: ["<!--This is a comment-->", "/This is a comment/", "//This is a comment", "#This is a comment#"],
      correctAnswer: "<!--This is a comment-->"
      },
      
      {
      question: "Which tag is used to embed an image in HTML?",
      options: ["<img>", "<embed>", "<image>", "<picture>"],
      correctAnswer: "<img>"
      },
      
      {
      question: "What is the purpose of the HTML <nav> element?",
      options: ["To define a navigation menu", "To create a hyperlink", "To define a section of navigation links", "To specify the page title"],
      correctAnswer: "To define a navigation menu"
      },
      
      {
      question: "Which HTML tag is used for creating a hyperlink?",
      options: ["<a>", "<link>", "<href>", "<hyper>"],
      correctAnswer: "<a>"
      },
      
      {
      question: "In HTML, what is the purpose of the <article> element?",
      options: ["To define a section of navigation links", "To create an article or blog post", "To specify the page title", "To define metadata about the HTML document"],
      correctAnswer: "To create an article or blog post"
      },
      
      {
      question: "Which attribute is used to define the source URL of an embedded resource, such as an image or a video?",
      options: ["src", "href", "url", "link"],
      correctAnswer: "src"
      },
      
      {
      question: "What is the purpose of the HTML <aside> element?",
      options: ["To create a side menu", "To define a section of navigation links", "To specify the page title", "To provide content that is tangentially related to the content around it"],
      correctAnswer: "To provide content that is tangentially related to the content around it"
      },
      
      {
      question: "Which HTML tag is used for creating an ordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correctAnswer: "<ol>"
      },
      
      {
      question: "What is the purpose of the HTML <header> element?",
      options: ["To create a header for the page", "To define metadata about the HTML document", "To specify the page title", "To define a section of navigation links"],
      correctAnswer: "To create a header for the page"
      },
      
      {
      question: "Which attribute is used to set the width of a table cell in HTML?",
      options: ["width", "size", "cell-width", "table-width"],
      correctAnswer: "width"
      },
      
      {
      question: "How can you make text bold in HTML?",
      options: ["<strong>", "<bold>", "<b>", "<em>"],
      correctAnswer: "<strong>"
      },
      
      {
      question: "What is the purpose of the HTML <main> element?",
      options: ["To define a main heading for the page", "To create a main section of content", "To specify the page title", "To define metadata about the HTML document"],
      correctAnswer: "To create a main section of content"
      },
      
      {
      question: "Which HTML tag is used for creating a line break?",
      options: ["<break>", "<lb>", "<br>", "<linebreak>"],
      correctAnswer: "<br>"
      },
      
      {
      question: "In HTML, what does the <cite> element represent?",
      options: ["A code citation", "A block of code", "A book or work title", "A citation link"],
      correctAnswer: "A book or work title"
      },
      
      {
      question: "What is the purpose of the HTML <section> element?",
      options: ["To define a navigation menu", "To create a section of content", "To specify the page title", "To define metadata about the HTML document"],
      correctAnswer: "To create a section of content"
      },
      
      {
      question: "Which attribute is used to define the target URL of a hyperlink in HTML?",
      options: ["link", "url", "target", "href"],
      correctAnswer: "href"
      },
      
      {
      question: "What is the purpose of the HTML <figure> element?",
      options: ["To create a figure or image", "To define metadata about the HTML document", "To specify the page title", "To create a caption for an image"],
      correctAnswer: "To create a caption for an image"
      },
      
      {
      question: "Which HTML tag is used for creating a form?",
      options: ["<form>", "<input>", "<submit>", "<field>"],
      correctAnswer: "<form>"
      },
      
      {
      question: "In HTML, what does the <label> element do?",
      options: ["Defines a label for an input element", "Creates a label for a paragraph", "Specifies the page title", "Defines metadata about the HTML document"],
      correctAnswer: "Defines a label for an input element"
      },
      
      {
      question: "What is the purpose of the HTML <textarea> element?",
      options: ["To create a text area for typing", "To define metadata about the HTML document", "To specify the page title", "To create a table"],
      correctAnswer: "To create a text area for typing"
      },
      
      {
      question: "Which attribute is used to set the maximum length of characters allowed in an HTML input field?",
      options: ["max-length", "length", "maxlength", "size"],
      correctAnswer: "maxlength"
      },
      
      {
      question: "How can you make a checkbox pre-checked in HTML?",
      options: ["<checked>", "<default>", "<pre-check>", "checked attribute"],
      correctAnswer: "checked attribute"
      },
      
      {
      question: "What is the purpose of the HTML <select> element?",
      options: ["To create a checkbox", "To define metadata about the HTML document", "To specify the page title", "To create a dropdown list"],
      correctAnswer: "To create a dropdown list"
      },
      
      {
      question: "Which HTML tag is used for creating an option in a dropdown list?",
      options: ["<option>", "<select>", "<dropdown>", "<choose>"],
      correctAnswer: "<option>"
      },
      
      {
      question: "In HTML, what does the <fieldset> element do?",
      options: ["Defines a field in a form", "Creates a field for a paragraph", "Specifies the page title", "Defines metadata about the HTML document"],
      correctAnswer: "Defines a field in a form"
      },
      
      {
      question: "Which attribute is used to set the placeholder text in an HTML input field?",
      options: ["placeholder", "hint", "text", "input-placeholder"],
      correctAnswer: "placeholder"
      },
      
      {
      question: "What is the purpose of the HTML <legend> element?",
      options: ["To create a legendary heading", "To define metadata about the HTML document", "To specify the page title", "To provide a caption for the content of a <fieldset> element"],
      correctAnswer: "To provide a caption for the content of a <fieldset> element"
      },
      
      {
      question: "Which HTML tag is used for creating a radio button?",
      options: ["<input>", "<radio>", "<select>", "<button>"],
      correctAnswer: "<input>"
      },
      
      {
      question: "In HTML, what does the <progress> element represent?",
      options: ["A work in progress", "A progress bar", "A progress link", "A programming language"],
      correctAnswer: "A progress bar"
      },
      
      {
      question: "What is the purpose of the HTML <datalist> element?",
      options: ["To create a list of data", "To define metadata about the HTML document", "To specify the page title", "To create a dropdown list"],
      correctAnswer: "To create a list of data"
      },
      
      {
      question: "Which attribute is used to set the minimum value of an HTML input field?",
      options: ["min", "minimum", "value-min", "input-min"],
      correctAnswer: "min"
      },
      
      {
      question: "How can you make a form element non-editable in HTML?",
      options: ["<read-only>", "<disable>", "<non-edit>", "readonly attribute"],
      correctAnswer: "readonly attribute"
      },
      
      {
      question: "What is the purpose of the HTML <output> element?",
      options: ["To create an output section", "To define metadata about the HTML document", "To specify the page title", "To represent the result of a calculation or user action"],
      correctAnswer: "To represent the result of a calculation or user action"
      },
      
      {
      question: "Which HTML tag is used for creating a submit button in a form?",
      options: ["<submit>", "<button>", "<input>", "<send>"],
      correctAnswer: "<button>"
      },
      
      {
      question: "In HTML, what does the <meter> element represent?",
      options: ["A unit of measurement", "A progress bar", "A meter", "A navigation menu"],
      correctAnswer: "A unit of measurement"
      },
      
      {
      question: "What is the purpose of the HTML <details> element?",
      options: ["To create a detailed section", "To define metadata about the HTML document", "To specify the page title", "To create a disclosure widget from which the user can obtain additional information or controls"],
      correctAnswer: "To create a disclosure widget from which the user can obtain additional information or controls"
      },
      
      {
      question: "Which attribute is used to set the step size of an HTML input field?",
      options: ["increment", "step-size", "step", "input-step"],
      correctAnswer: "step"
      },

  ];

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[questionIndex];

    // Check if the selected option is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      // Update the score
      setScore(score + 1);
      setSelectedOption({ option: selectedOption, isCorrect: true });
    } else {
      // Set the selected option with an indication that it's incorrect
      setSelectedOption({ option: selectedOption, isCorrect: false });
    }
  };

  const handleNext = () => {
    // Move to the next question and reset the selected option
    const nextQuestionIndex = questionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setQuestionIndex(nextQuestionIndex);
      setSelectedOption(null);
    } else {
      // Navigate to the result screen if all questions are answered
      navigation.navigate('Result', {
        score,
        totalQuestions: questions.length,
      });
    }
  };

  const handlePrevious = () => {
    // Move to the previous question and reset the selected option
    const previousQuestionIndex = questionIndex - 1;

    if (previousQuestionIndex >= 0) {
      setQuestionIndex(previousQuestionIndex);
      setSelectedOption(null);
    }
  };

  const getOptionStyle = (option) => {
    const baseStyle = {
      backgroundColor: 'black',
      padding: 15,
      margin: 10,
      borderRadius: 10,
      width: 300,
    };

    if (!selectedOption) {
      return baseStyle;
    }

    if (selectedOption.option === option) {
      return selectedOption.isCorrect
        ? { ...baseStyle, backgroundColor: '#2ecc71' }
        : { ...baseStyle, backgroundColor: '#e74c3c' };
    }

    return baseStyle;
  };

  return (
    <View style={styles.container}>
      {questions.length > 0 && (
        <>
          <Text style={styles.questionNumber}>{`Question ${questionIndex + 1}`}</Text>
          <Text style={styles.questionText}>{questions[questionIndex].question}</Text>
          {questions[questionIndex].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={getOptionStyle(option)}
              onPress={() => handleAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handlePrevious}
          disabled={questionIndex === 0}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
questionNumber: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
    color:'black'

  },
  questionText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 80,
    textAlign: 'center',
    color:'black'
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
  },
  button1: {
    backgroundColor: '#3498db',
    padding: 15,
    width: '45%',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    width: '45%',
    borderRadius: 10,
    marginLeft:10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default QuizScreen;
