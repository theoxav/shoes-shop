import {Text, StyleSheet} from "react-native";
import {TEXT_SIZES} from "../../constants/textSize";
import {COLORS} from "../../constants/colors";

const TextBoldM = ({children, blue = false}) => (
    <Text style={[styles.txt, {color: blue ? COLORS.BLUE : COLORS.DARK}]}>{children}</Text>
)

const styles = StyleSheet.create({
    txt: {
        fontFamily: 'SemiBold',
        fontSize: TEXT_SIZES.M,
    }
})

export default TextBoldM;
