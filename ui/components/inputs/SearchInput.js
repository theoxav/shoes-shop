import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { SPACES } from '../../../constants/spaces';
import { RADIUS } from '../../../constants/radius';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { TEXT_SIZE } from '../../../constants/textSize';

export default function SearchInput({ placeholder, value, onChangeText }) {
  return (
    <View style={styles.inputContainer}>
      <EvilIcons
        name="search"
        size={32}
        color={COLORS.GREY}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    marginHorizontal: SPACES.L,
    borderRadius: RADIUS.FULL,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: SPACES.M,
  },
  input: {
    flex: 1,
    paddingVertical: SPACES.S,
    paddingRight: SPACES.S,
    color: COLORS.GREY,
    fontFamily: 'Regular',
    fontSize: TEXT_SIZE.M,
  },
});
