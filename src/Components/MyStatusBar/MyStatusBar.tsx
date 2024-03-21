import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

type statusBarProps = {
  backgroundColor: string;
};

function MyStatusBar(props: statusBarProps) {
  const {backgroundColor} = props;
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
}

export default MyStatusBar;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'green'},
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },

  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
