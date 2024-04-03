import {GradientBorderView} from '@good-react-native/gradient-border';
import {View, Text} from 'react-native';

import {colorOpacity} from '@src/utils/ColorUtil';

import {useDispatch, useSelector} from 'react-redux';

export default function CommonButtonBG({bg, size = 54, children, ...rest}) {
  const {theme} = useSelector(state => state.ThemeReducer);
  return (
    <View>
      <GradientBorderView
        gradientProps={{
          // colors: ['#34D39926', '#34D39926'],
          colors: [
            colorOpacity(theme.secondary2, 0.25),
            colorOpacity(theme.secondary2, 0.15),
          ],
          start: {x: 0, y: 0},
          end: {x: 1, y: 1},
        }}
        style={{
          borderWidth: 1,
          borderRadius: 100,
          height: size,
          width: size,
          overflow: 'hidden',
          position: 'relative',
        }}>
        <View
          style={{
            backgroundColor: bg,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            borderRadius: 100,
          }}></View>
      </GradientBorderView>
      <View
        style={{
          position: 'absolute',
          width: size,
          height: size,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {children}
      </View>
    </View>
  );
}
