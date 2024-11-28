import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { SPACES } from '../../../constants/spaces';
import TextBoldL from '../../../ui/components/TextBoldL';
import TextMediumM from '../../../ui/components/TextMediumM';

export default function Banner({ text }) {
  const onPress = () => {};

  return (
    <View style={styles.container}>
      <TextBoldL>{text}</TextBoldL>
      <TouchableOpacity onPress={onPress}>
        <TextMediumM blue>Voir tout</TextMediumM>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SPACES.L,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACES.M,
  },
});
