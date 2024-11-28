import { SafeAreaView, View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import SearchSection from './searchSection';
import ListSection from './listSection';
import NewsSection from './newsSection';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%', backgroundColor: '#000000', height: 60 }} />
      <SearchSection />
      <ListSection />
      <NewsSection />
      <View
        style={{ width: '100%', backgroundColor: '#000000', height: 106 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT,
    justifyContent: 'space-between',
  },
});
