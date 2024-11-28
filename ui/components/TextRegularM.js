import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants/colors';
import { TEXT_SIZE } from '../../constants/textSize';

const TextRegularM = ({ children, blue = false }) => {
  return (
    <Text style={[styles.txt, { color: blue ? COLORS.BLUE : COLORS.DARK }]}>
      {children}
    </Text>
  );
};

export default TextRegularM;

const styles = StyleSheet.create({
  txt: {
    fontFamily: 'Regular',
    fontSize: TEXT_SIZE.M,
  },
});
