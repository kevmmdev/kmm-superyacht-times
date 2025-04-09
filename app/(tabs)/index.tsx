import { Image, StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { AppSearchBar } from '@/components/AppSearchBar';
import { AppFlatList } from '@/components/AppFlatList';
import { useState } from 'react';

const HomeHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Welcome my comrades!</Text>
      <AppSearchBar value='' placeholder='Search for yacht' />
    </View>
  )
}

const ListEmptyComponent = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No data found 😕</Text>
    </View>
  )
}

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView>
      <AppFlatList
        ListHeaderComponent={HomeHeader}
        data={[]}
        renderItem={() => null}
        ListEmptyComponent={ListEmptyComponent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    gap: 10
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});
