import { View, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../../../constants/colors';
import { RADIUS } from '../../../../constants/radius';
import { SPACES } from '../../../../constants/spaces';
import TextMediumS from '../../../../ui/components/TextMediumS';
import TextBoldL from '../../../../ui/components/TextBoldL';
import TextMediumM from '../../../../ui/components/TextMediumM';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function VerticalCard({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.items[0].image} style={styles.image} />
      </View>
      <View style={styles.descriptionContainer}>
        <View>
          <TextMediumS blue>TOP VENTE</TextMediumS>
          <TextBoldL style={styles.itemName}>{item.name}</TextBoldL>
        </View>
        <TextMediumM>{item.price} €</TextMediumM>
      </View>
      <View style={styles.btn}>
        <AntDesign name="plus" size={24} color={COLORS.WHITE} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 180,
    height: '100%',
    backgroundColor: COLORS.WHITE,
    borderRadius: RADIUS.REGULAR,
    padding: SPACES.S,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACES.S,
  },
  image: {
    width: 150,
    height: 150,
    transform: [
      {
        rotate: '-20deg',
      },
      { translateX: -SPACES.S },
      { translateY: -SPACES.S },
    ],
  },
  descriptionContainer: {
    flex: 0.7,
    justifyContent: 'space-between',
    padding: SPACES.S,
  },
  itemName: {
    marginTop: SPACES.S,
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.BLUE,
    borderTopLeftRadius: RADIUS.REGULAR,
    borderBottomRightRadius: RADIUS.REGULAR,
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
});
