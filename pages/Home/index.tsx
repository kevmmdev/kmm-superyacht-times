import { StyleSheet, SafeAreaView, View, Text, ActivityIndicator } from 'react-native';
import { AppSearchBar } from '@/components/AppSearchBar';
import { AppFlatList } from '@/components/AppFlatList';
import React, { useState } from 'react';
import { useYachtSearch } from '@/api/yachtLike/hooks';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import YachtItem from '@/pages/Home/YachtItem';

type HomeHeaderProps = {
  searchYacht: string;
  onSearchYacht: (searchText: string) => void
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ searchYacht, onSearchYacht }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Welcome my comrades!</Text>
      <AppSearchBar value={searchYacht} placeholder='Search for yacht' onChangeText={onSearchYacht} />
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

// TODO - Provider implementation to avoid prop drilling
export default function HomeScreen() {
  const [searchYacht, setSearchYacht] = useState('');
  const debouncedSearch = useDebouncedValue(searchYacht, 500)

  const { data, isLoading } = useYachtSearch({
    searchTerm: debouncedSearch,
    size: 25,
  })

  const onSearchYacht = (searchText: string) => setSearchYacht(searchText);

  console.log(data?.yacht_likes)

  const isEmptyData = !isLoading && data?.yacht_likes?.length === 0;

  return (
    <SafeAreaView style={styles.parentContainer}>
      <HomeHeader searchYacht={searchYacht} onSearchYacht={onSearchYacht} />
      <AppFlatList
        style={styles.list}
        data={data?.yacht_likes}
        renderItem={(yacht) => <YachtItem {...yacht} />}
        ListEmptyComponent={isEmptyData ? ListEmptyComponent : null}
        ListFooterComponent={isLoading ? ActivityIndicator : null}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1
  },
  list: {
    // backgroundColor: 'red',
  },
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
