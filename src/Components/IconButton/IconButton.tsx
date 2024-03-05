import React from 'react';
import {ImageResizeMode, ImageSourcePropType} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconButtonProps = {
  type?: 'MaterialCommunityIcons';
  dark?: boolean;
  name?: string | any;
  source?: ImageSourcePropType;
  resizeMode?: ImageResizeMode;
  size?: number;
};

function IconButton(
  props: IconButtonProps & Omit<IconProps, 'onPress' | 'name'>,
) {
  const {color, size = 24, name} = props;

  return <MaterialCommunityIcons name={name} size={size} color={color} />;
}

export default IconButton;
