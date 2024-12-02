import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from '../../constants/colors';
import SearchSection from './searchSection';
import ListSection from './listSection';
import NewsSection from './newsSection';

export default function HomeScreen() {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
      >
        <SearchSection />
        <ListSection />
        <NewsSection />
      </ScrollView>
    </SafeAreaView>
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
