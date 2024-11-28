import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TEXT_SIZE } from '../../constants/textSize';

const TextMediumM = ({ children, blue = false }) => {
  return (
    <Text style={[styles.txt, { color: blue ? COLORS.BLUE : COLORS.DARK }]}>
      {children}
    </Text>
  );
};

export default TextMediumM;

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Medium',
    fontSize: TEXT_SIZE.M,
  },
});
