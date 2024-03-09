import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Theme} from '../../Themes/Theme';
import IconButton from '../IconButton/IconButton';

type AppBarHomeprop = {
  backgroundColor: string;
};

function AppBarHome(props: AppBarHomeprop) {
  const {backgroundColor} = props;
  return (
    <View>
      <View style={[styles.statusBar, {backgroundColor}]}>
        <SafeAreaView>
          <StatusBar
            translucent
            backgroundColor={backgroundColor}
            barStyle="dark-content"
          />
        </SafeAreaView>
      </View>
      <View style={[styles.appBar, {backgroundColor}]}>
        <IconButton size={30} name="menu" />
        <Text style={styles.appBarText}>Home</Text>
        <IconButton size={30} name="login" />
      </View>
    </View>
  );
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default AppBarHome;
const styles = StyleSheet.create({
  container: {flex: 1},
  headerText: {color: Theme.colors.TextColor1},
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    height: APPBAR_HEIGHT,

    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  appBarText: {
    color: Theme.colors.TextColor1,
  },
});
