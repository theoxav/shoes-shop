import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TEXT_SIZE } from '../../constants/textSize';

const TextRegularS = ({ children, blue = false }) => {
  return (
    <Text style={[styles.txt, { color: blue ? COLORS.BLUE : COLORS.DARK }]}>
      {children}
    </Text>
  );
};

export default TextRegularS;

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Regular',
    fontSize: TEXT_SIZE.S,
  },
});
