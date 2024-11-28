import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Light: require('./assets/fonts/Montserrat-Light.ttf'),
    Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
    SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
