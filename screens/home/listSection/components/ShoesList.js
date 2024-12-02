import { FlatList, StyleSheet } from 'react-native';
import { shoes } from '../../../../data/shoes';
import VerticalCard from './VerticalCard';
import ItemSeparator from '../../../../ui/components/separators/ItemSeparator';
import { SPACES } from '../../../../constants/spaces';

export default function ShoesList({ selectedBrand, inputValue }) {
  const data = shoes
    .find((elem) => elem.brand === selectedBrand)
    .stock.filter((item) => !item.new);

  const filteredData = inputValue
    ? data.filter((elem) =>
        elem.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    : data;

  return (
    <FlatList
      horizontal
      data={filteredData}
      renderItem={({ item }) => <VerticalCard item={item} />}
      ItemSeparatorComponent={<ItemSeparator width={SPACES.S} />}
      contentContainerStyle={styles.listContainer}
      showHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: SPACES.L,
  },
});
