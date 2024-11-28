import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TEXT_SIZE } from '../../constants/textSize';

const TextMediumS = ({ children, blue = false }) => {
  return (
    <Text style={[styles.txt, { color: blue ? COLORS.BLUE : COLORS.DARK }]}>
      {children}
    </Text>
  );
};

export default TextMediumS;

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Medium',
    fontSize: TEXT_SIZE.S,
  },
});
