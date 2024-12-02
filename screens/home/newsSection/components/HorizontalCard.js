import { Image, StyleSheet, View } from 'react-native';
import TextMediumM from '../../../../ui/components/TextMediumM';
import TextBoldXL from '../../../../ui/components/TextBoldXL';
import TextBoldM from '../../../../ui/components/TextBoldM';
import { COLORS } from '../../../../constants/colors';
import { RADIUS } from '../../../../constants/radius';
import { SPACES } from '../../../../constants/spaces';

export default function HorizontalCard({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <View>
          <TextMediumM blue>MEILLEUR CHOIX</TextMediumM>
          <TextBoldXL>{item.name}</TextBoldXL>
        </View>
        <TextBoldM>{item.price} €</TextBoldM>
      </View>
      <View style={styles.imageContainer}>
        <Image source={item.items[0].image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '80%',
    backgroundColor: COLORS.WHITE,
    borderRadius: RADIUS.REGULAR,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: SPACES.L,
  },
  descriptionContainer: {
    flex: 1,
    height: '90%',
    justifyContent: 'space-between',
    padding: SPACES.L,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SPACES.M,
  },
  image: {
    width: '100%',
    height: '100%',
    transform: [
      { rotate: '-20deg' },
      { translateX: -SPACES.M },
      { translateY: -SPACES.L },
      { scale: 1.3 },
    ],
  },
});
