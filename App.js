/* eslint-disable no-undef */
import React, {useState, useRef} from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

function App() {
  const [progressValue, setProgressValue] = useState(0);
  const [buttonCollapse, setButtonCollapse] = useState(true);
  const [isClicked, setIsClicked] = useState(true);

  const timer = useRef(null);
  const increment = () => {
    if (progressValue !== 100) {
      console.log('started recording');
      timer.current = setInterval(() => setProgressValue(prev => prev + 1), 60);
    }
    if (progressValue === 100) {
      timer.current = 0;
      setProgressValue(0);
      console.log('completed');
    }
  };

  function timeoutClear() {
    clearInterval(timer.current);
    if (buttonCollapse) {
      setButtonCollapse(false);
      console.log('completed');
    }
  }

  const imageClicked = () => {
    if (isClicked) {
      console.log('clicked image');
      setIsClicked(false);
    }
  };

  console.log(progressValue);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onLongPress={increment}
        onPress={imageClicked}
        onPressOut={timeoutClear}>
        <View style={styles.containertwo}>
          {buttonCollapse && (
            <AnimatedCircularProgress
              size={100}
              width={8}
              backgroundWidth={5}
              rotation={0}
              fill={progressValue}
              tintColor="#00ff00"
              backgroundColor="white"
              lineCap="round">
              {fill => <Text>Hold</Text>}
            </AnimatedCircularProgress>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  points: {
    textAlign: 'center',
    color: '#7591af',
    fontSize: 50,
    fontWeight: '100',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    top: '1%',
    backgroundColor: 'lightblue',
  },
  containertwo: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    top: '60%',
    backgroundColor: 'lightblue',
  },
  pointsDelta: {
    color: '#4c6479',
    fontSize: 50,
    fontWeight: '100',
  },
  pointsDeltaActive: {
    color: '#fff',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
});

export default App;
