import { View, StyleSheet } from 'react-native';
import SearchInput from '../../../ui/components/inputs/SearchInput';
import { useState } from 'react';
import { SPACES } from '../../../constants/spaces';

export default function SearchSection() {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.container}>
      <SearchInput
        placeholder="Trouver vos shoes"
        value={inputValue}
        onChangeText={setInputValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    flex: 120,
    paddingTop: SPACES.S,
  },
});
