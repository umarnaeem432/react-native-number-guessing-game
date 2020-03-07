import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from '../components/NumberContainer';

import Colors from "../constants/colors";
const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const confirmInputHandler = () => {
    // Perform some security checks
    const number = parseInt(enteredValue);
    if (isNaN(number) || number <= 0 || number > 99) {
      // Show an Alert
      Alert.alert(
        "Invalid Input!",
        "Number should be a number between 1 - 99.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInput
          }
        ]
      );
      return;
    }

    setSelectedNumber(number);
    setEnteredValue("");
    setConfirmed(true);
    Keyboard.dismiss();
  };

  const resetInput = () => {
    setEnteredValue("");
    setConfirmed(false);
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <Text>You Selected</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME"/>
        </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>

        <Card style={styles.inputContainer}>
          <Text style={styles.title}>Select a Number</Text>

          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInput}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  button: {
    width: 80
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
      marginTop: 20,
      alignItems: 'center',
  }
});

export default StartGameScreen;
