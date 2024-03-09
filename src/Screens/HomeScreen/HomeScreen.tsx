import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Theme} from '../../Themes/Theme';
import AppBarHome from '../../Components/AppBarHome/AppBarHome';
import IconButton from '../../Components/IconButton/IconButton';
import {Products} from '../../../Data';
function HomeScreen() {
  const [search, setSearch] = useState<string>('');
  return (
    <View style={styles.container}>
      <AppBarHome backgroundColor={Theme.colors.primary} />
      <View style={styles.InputContainer}>
        <View style={styles.inputTextWithIcon}>
          <IconButton
            color={Theme.colors.placeholder}
            name={'magnify'}
            size={24}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Search for Products, Brands and More"
            onChangeText={searchString => {
              setSearch(searchString);
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Theme.colors.white},
  InputContainer: {
    backgroundColor: Theme.colors.primary,

    justifyContent: 'center',
  },
  inputTextWithIcon: {
    paddingLeft: 5,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.5,
    height: 40,
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 5,
    backgroundColor: Theme.colors.white,
  },
  inputText: {
    fontSize: 16,
    color: Theme.colors.placeholder,
    borderRadius: 8,
    paddingHorizontal: 2,
    backgroundColor: Theme.colors.white,
  },
});
