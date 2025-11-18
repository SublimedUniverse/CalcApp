import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [calcData, setCalcData] = useState({ num: '20.0', result: null });

  const doCalc = () => {
    const numToCalc = parseFloat(calcData.num); // Parse the number

    if (isNaN(numToCalc)) {
      setCalcData({ ...calcData, result: 'Invalid Input' });
      return; // Stop the function here
    }

    const cube = numToCalc * numToCalc * numToCalc;
    setCalcData({ ...calcData, result: `Cube of ${numToCalc} is ${cube}` });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALC APP</Text>
      <TextInput
        value={calcData.num}
        keyboardType="numeric"
        placeholder="Enter a number"
        onChangeText={(text) => setCalcData({ ...calcData, num: text })}
        style={styles.input}
      />
      <Button title="Calculate Cube" onPress={doCalc} />
      {calcData.result && (
        <Text style={styles.result}>{calcData.result}</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86a4ebff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});