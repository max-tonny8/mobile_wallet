import {GradientBorderView} from '@good-react-native/gradient-border';
import LinearGradient from 'react-native-linear-gradient';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {colorOpacity} from '@src/utils/ColorUtil';

export default function CommonGradientBorder({
  style,
  bg = 'gradient',
  borderWidth = 1,
  children,
  ...rest
}) {
  const {theme} = useSelector(state => state.ThemeReducer);
  return (
    <View style={style}>
      <GradientBorderView
        gradientProps={{
          colors: [
            colorOpacity(theme.secondary2, 0.4),
            colorOpacity(theme.secondary2, 0.5),
            colorOpacity(theme.secondary2, 0.6),
            theme.main,
          ],
          start: {x: 0.59, y: 0},
          end: {x: 0.65, y: 0.9},
        }}
        style={{
          position: 'relative',
          borderWidth: borderWidth,
          borderRadius: 10,
          overflow: 'hidden',
        }}>
        {bg == 'gradient' && (
          <LinearGradient
            colors={['#274748a0', '#232c2bd0']}
            start={{x: 0, y: 0}}
            end={{x: 0.9, y: 0.4}}>
            {children}
          </LinearGradient>
        )}
        {bg == 'none' && (
          <View
            style={{
              backgroundColor: colorOpacity(theme.secondary2, 0.08),
              zIndex: 2,
            }}>
            {children}
          </View>
        )}
      </GradientBorderView>
    </View>
  );
}
