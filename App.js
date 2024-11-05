import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {useFonts} from 'expo-font';
import TextBoldS from "./UI/TEXTS/TextBoldS";
import TextBoldXL from "./UI/TEXTS/TextBoldXL";
import TextRegularM from "./UI/TEXTS/TextRegularM";
import TextMediumM from "./UI/TEXTS/TextMediumM";

export default function App() {
    const [fontsLoaded] = useFonts({
        Light: require('./assets/fonts/Montserrat-Light.ttf'),
        Regular: require('./assets/fonts/Montserrat-Regular.ttf'),
        Medium: require('./assets/fonts/Montserrat-Medium.ttf'),
        SemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    })

    return fontsLoaded ? (
        <View style={styles.container}>
            <TextBoldS>Open up App.js to start working on your app!</TextBoldS>
            <TextBoldXL>Open up App.js to start working on your app!</TextBoldXL>
            <TextRegularM>Open up App.js to start working on your app!</TextRegularM>
            <TextMediumM blue>Open up App.js to start working on your app!</TextMediumM>
            <StatusBar style="auto"/>
        </View>
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
