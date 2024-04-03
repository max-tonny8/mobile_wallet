import {GradientBorderView} from '@good-react-native/gradient-border';
import {View} from 'react-native';

export default function CommonTokenBG({bg, size = 30, children, ...rest}) {
  return (
    <View>
      <GradientBorderView
        gradientProps={{
          colors: ['#49948F26', '#49948F26', '#00ffee'],
          start: {x: 0, y: 0},
          end: {x: 1, y: 1},
        }}
        style={{
          position: 'relative',
          borderWidth: 1,
          borderRadius: 100,
          height: size,
          width: size,
          overflow: 'hidden',
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: bg,
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
