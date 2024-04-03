import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

import BackIcon from '@assets/svgs/common/back.svg';

export default function CommonBackButton({style, ...rest}) {
  return (
    <TouchableOpacity style={style} {...rest}>
      <BackIcon />
    </TouchableOpacity>
  );
}
