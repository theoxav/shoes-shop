import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TEXT_SIZE } from '../../constants/textSize';

const TextBoldS = ({ children, blue = false }) => {
  return (
    <Text style={[styles.txt, { color: blue ? COLORS.BLUE : COLORS.DARK }]}>
      {children}
    </Text>
  );
};

export default TextBoldS;

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'SemiBold',
    fontSize: TEXT_SIZE.S,
  },
});
