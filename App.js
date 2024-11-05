import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {useFonts} from 'expo-font';
import TextBoldS from "./UI/TEXTS/TextBoldS";
import TextBoldXL from "./UI/TEXTS/TextBoldXL";
import TextRegularM from "./UI/TEXTS/TextRegularM";
import TextMediumM from "./UI/TEXTS/TextMediumM";
import HomeScreen from "./screens/home";

export default function App() {
    const [fontsLoaded] = useFonts({
        Light: require('./assets/fonts/Montserrat-Light.ttf'),
        Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
        Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
        SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    })

    return fontsLoaded ? (
        <HomeScreen/>
    ) : null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
