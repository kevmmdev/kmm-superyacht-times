import { FlatList } from 'react-native';
import type { FlatListProps } from 'react-native';

export const AppFlatList = <T,>(props: FlatListProps<T>) => {
  return <FlatList {...props} />;
};
