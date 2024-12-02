import { View, StyleSheet } from 'react-native';
import Banner from '../components/Banner';
import HorizontalCard from './components/HorizontalCard';
import { shoes } from '../../../data/shoes';
import { SPACES } from '../../../constants/spaces';

const item = shoes[0].stock.find((elem) => elem.new);

export default function NewsSection() {
  return (
    <View style={styles.container}>
      <Banner text="Nouveautés" />
      <HorizontalCard item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 160,
    paddingVertical: SPACES.M,
  },
});
