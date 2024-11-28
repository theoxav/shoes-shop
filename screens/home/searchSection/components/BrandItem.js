import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../../../constants/colors';
import { RADIUS } from '../../../../constants/radius';
import { SPACES } from '../../../../constants/spaces';
import { SIZE } from '../../../../constants/size';
import TextBoldL from '../../../../ui/components/TextBoldL';
import { brands } from '../../../../data/brands';

export default function BrandItem({
  brand,
  selectedBrand,
  setSelectedBrand,
  index,
}) {
  const onPressBand = () => {
    setSelectedBrand(brand.name);
  };

  return (
    <TouchableOpacity
      onPress={onPressBand}
      style={{
        marginLeft: index === 0 ? SPACES.L : 0,
        marginRight: index === brands.length - 1 ? SPACES.L : 0,
      }}
    >
      {brand.name === selectedBrand ? (
        <View style={styles.selectedBrandContainer}>
          <View style={styles.iconContainer}>
            <Image source={brand.logo} style={styles.image} />
          </View>
          <TextBoldL style={styles.brandText}>
            {brand.name.replace('-', ' ')}
          </TextBoldL>
        </View>
      ) : (
        <View style={[styles.iconContainer, styles.unselectedBrandContainer]}>
          <Image source={brand.logo} style={styles.image} />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  selectedBrandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: RADIUS.FULL,
    backgroundColor: COLORS.BLUE,
    padding: SPACES.S,
  },
  iconContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: RADIUS.FULL,
    padding: SPACES.S,
  },
  image: {
    width: SIZE.ICON_SIZE,
    height: SIZE.ICON_SIZE,
    resizeMode: 'contain',
  },
  brandText: {
    color: COLORS.WHITE,
    marginHorizontal: SPACES.S,
    textTransform: 'capitalize',
  },
  unselectedBrandContainer: {
    marginTop: SPACES.S,
  },
});
