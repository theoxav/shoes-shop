import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { COLORS } from '../../constants/colors';
import SearchSection from './searchSection';
import ListSection from './listSection';
import NewsSection from './newsSection';
import { useState } from 'react';

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('nike');

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar />
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
      >
        <SearchSection
          inputValue={inputValue}
          setInputValue={setInputValue}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
        />
        <ListSection selectedBrand={selectedBrand} inputValue={inputValue} />
        <NewsSection selectedBrand={selectedBrand} />
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
