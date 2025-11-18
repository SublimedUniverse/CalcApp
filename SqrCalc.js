import { StatusBar } from 'expo-status-bar';
// 1. ADDED: useState, TextInput, Button
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react'; // 1. ADDED: React and useState

export default function App() {
  // 2. FIXED: Changed 'calc' to 'calcData' to match your code
  const [calcData, setCalcData] = useState({ num: '20.0', result: null });

  const doCalc = () => {
    const numToCalc = parseFloat(calcData.num); // Parse the number

    // 3. FIXED: Typo 'isNAN' changed to 'isNaN'
    if (isNaN(numToCalc)) {
      setCalcData({ ...calcData, result: 'Invalid Input' });
      return; // Stop the function here
    }

    // 4. FIXED: Removed the extra 'return;' from here
    const square = numToCalc * numToCalc;
    setCalcData({ ...calcData, result: `Square of ${numToCalc} is ${square}` });
  };

  // 5. FIXED: The main 'return' is now part of App, not doCalc
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CALC APP</Text>
      <TextInput
        value={calcData.num}
        keyboardType="numeric"
        placeholder="Enter a number"
        // 6. FIXED: Pass 'text' directly to setCalcData
        onChangeText={(text) => setCalcData({ ...calcData, num: text })}
        style={styles.input}
      />
      <Button title="Calculate Square" onPress={doCalc} />
      {calcData.result && (
        <Text style={styles.result}>{calcData.result}</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
} // 7. FIXED: Added the missing closing } for the App component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3c5dfff',
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