import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TEXT_SIZE } from '../../constants/textSize';

const TextBoldL = ({ children, blue = false, style }) => {
  return (
    <Text
      style={[styles.txt, { color: blue ? COLORS.BLUE : COLORS.DARK }, style]}
    >
      {children}
    </Text>
  );
};

export default TextBoldL;

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'SemiBold',
    fontSize: TEXT_SIZE.L,
  },
});
