import {GradientBorderView} from '@good-react-native/gradient-border';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
import {colorOpacity} from '@src/utils/ColorUtil';

import {useDispatch, useSelector} from 'react-redux';

export default function CommonGradientBG({
  bg = null,
  children,
  style,
  ...rest
}) {
  const {theme} = useSelector(state => state.ThemeReducer);
  return (
    <GradientBorderView
      gradientProps={{
        colors: [
          colorOpacity(theme.secondary2, 0.25),
          colorOpacity(theme.secondary2, 0.15),
        ],
      }}
      style={{
        position: 'relative',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      <LinearGradient
        colors={[
          colorOpacity(theme.secondary2, 0.08),
          colorOpacity(theme.secondary2, 0.04),
        ]}
        style={style}>
        {children}
      </LinearGradient>
    </GradientBorderView>
  );
}
