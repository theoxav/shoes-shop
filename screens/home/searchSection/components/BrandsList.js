import { FlatList, StyleSheet } from 'react-native';
import { brands } from '../../../../data/brands';
import BrandItem from './BrandItem';
import ItemSeparator from '../../../../ui/components/separators/ItemSeparator';
import { SPACES } from '../../../../constants/spaces';

export default function BrandsList({ selectedBrand, setSelectedBrand }) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={brands}
      bounces={false}
      keyExtractor={(item) => item.name}
      style={styles.listContainer}
      ItemSeparatorComponent={<ItemSeparator width={SPACES.S} />}
      renderItem={({ item, index }) => (
        <BrandItem
          brand={item}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          index={index}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 0,
  },
});
