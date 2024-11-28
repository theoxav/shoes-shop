import { View, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../constants/colors';
import SearchSection from './searchSection';
import ListSection from './listSection';
import NewsSection from './newsSetion';

export default function HomeScreen() {
  return (
    <View style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
      >
        <SearchSection />
        <ListSection />
        <NewsSection />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT,
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});
