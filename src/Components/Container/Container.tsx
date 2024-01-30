import React, {Children, Fragment} from 'react';
import {
  SafeAreaView,
  StatusBarStyle,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import {Theme} from '../../Themes/Theme';

export type ContainerProps = {
  children?: React.ReactNode;
  backgroundColor?: string;
  statusBarBackgroundColor?: string;
  statusBarStyle?: StatusBarStyle;
  fullScreen?: boolean;
};

function Container(props: ContainerProps) {
  const {
    children,
    backgroundColor,
    fullScreen,
    statusBarBackgroundColor,
    statusBarStyle = 'light-content',
    variant,
  } = props;
  const colorTheme = useColorScheme();
  const theme = Theme[colorTheme];
  console.log(theme);
  return (
    <View style={[style.container, backgroundColor]}>
      {fullScreen ? (
        <Fragment>{children}</Fragment>
      ) : (
        <SafeAreaView>
          <View>{children}</View>
        </SafeAreaView>
      )}
    </View>
  );
}

export default Container;
const style = StyleSheet.create({container: {flex: 1}});
