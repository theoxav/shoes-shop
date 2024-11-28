import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { brands } from '../../../../data/brands';
import BrandItem from './BrandItem';
import ItemHorizontalSeparator from './ItemHorizontalSeparator';

export default function BrandsList() {
  const [selectedBrand, setSelectedBrand] = useState('nike');

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={brands}
      bounces={false}
      keyExtractor={(item) => item.name}
      style={styles.listContainer}
      ItemSeparatorComponent={ItemHorizontalSeparator}
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
