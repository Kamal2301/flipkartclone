import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Theme} from '../../Themes/Theme';
import AppBarHome from '../../Components/AppBarHome/AppBarHome';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <AppBarHome backgroundColor={Theme.colors.primary} />
      <View>
        <Text>Hiiii</Text>
      </View>
    </View>
  );
}

export default HomeScreen;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Theme.colors.white},
});
