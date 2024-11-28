import { FlatList, StyleSheet } from 'react-native';
import { shoes } from '../../../../data/shoes';
import VerticalCard from './VerticalCard';
import ItemSeparator from '../../../../ui/components/separators/ItemSeparator';
import { SPACES } from '../../../../constants/spaces';

export default function ShoesList() {
  const data = shoes[0].stock.filter((elem) => !elem.new);
  return (
    <FlatList
      horizontal
      data={data}
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
