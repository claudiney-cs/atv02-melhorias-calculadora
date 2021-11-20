import React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, LogBox } from 'react-native';

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  // Mapeamento de teclas
  const buttons = ['LIMPAR', 'DEL', '%', '/', 7, 8, 9, "x", 6, 5, 4, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']

  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setLastNumber] = useState("")


  function calculator() {
    const splitNumbers = currentNumber.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    // Faz ação referente tecla pressionada
    switch (operator) {
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString())
        return
      case '-':
        setCurrentNumber((fistNumber - lastNumber).toString())
        return
      case 'x':
        setCurrentNumber((fistNumber + lastNumber).toString())
        return
      case '/':
        setCurrentNumber((fistNumber - lastNumber).toString())
        return
    }
  }

  function handleInput(buttonPressed) {
    console.log(buttonPressed) // Mostra no Console a tecla pressionada
    if (buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "x" | buttonPressed === "/") {
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch (buttonPressed) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length - 2)))
        return
      case 'LIMPAR': // Limpa todo o conteúdo
        setLastNumber("")
        setCurrentNumber("")
        return
      case '=':
        setLastNumber(currentNumber + " = ")
        calculator()
        return
      case '+/-':
        return
    }

    setCurrentNumber(currentNumber + buttonPressed)
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>0</Text>
      </View>

      <View style={styles.inputContainer}>

      </View>
    </View>
  );
}

// Estilização
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: "#1E1240"
  },

  inputContainer: {
    flex: 8,
    backgroundColor: '#300075',
  },

  resultText: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right',
  }
  //historyText: {
  //  color: "#fff7c7c7c",
  // fontSize: 20,
  // marginRight: 10,
  // alignSelf: 'flex-end',
  //},
  //buttons: {
  //flexDirection: 'row',
  //flexWrap: 'wrap',
  //},
  //button: {
  // backgroundColor: '#300075',
  // alignItems: 'center',
  // justifyContent: 'center',
  // minWidth: 90,
  // minHeight: 90,
  // flex: 2,
  //},
  //textButton: {
  //  color: "#fff",
  // fontSize: 20,
  // }
});