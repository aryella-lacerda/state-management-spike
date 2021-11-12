import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {useCounter, useSkip} from './counter-selectors';

import {useRenderCount} from '../general/useRenderCount';

const Counter = () => {
  const {counter, increment, decrement} = useCounter();
  const renderCount = useRenderCount();
  return (
    <View style={styles.container}>
      <Text>{`Counter: ${counter}`}</Text>
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <Text>{`This component has rendered ${renderCount} times`}</Text>
    </View>
  );
};

const Skip = () => {
  const {skip, increment, decrement} = useSkip();
  const renderCount = useRenderCount();

  return (
    <View style={styles.container}>
      <Text>{`Skip: ${skip}`}</Text>
      <TouchableOpacity style={styles.button} onPress={increment}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <Text>{`This component has rendered ${renderCount} times`}</Text>
    </View>
  );
};

const Test = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Counter />
      <Skip />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default Test;
