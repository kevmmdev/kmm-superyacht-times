import { Searchbar, SearchbarProps } from "react-native-paper";

export const AppSearchBar = (props: SearchbarProps) => {
  return (
    <Searchbar
      placeholder="Search"
      {...props}
    />
  );
}