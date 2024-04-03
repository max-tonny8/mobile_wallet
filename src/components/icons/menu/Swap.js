import {View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {useDispatch, useSelector} from 'react-redux';
import ActiveIcon from '@assets/svgs/navbar/swap.svg';

export default function Swap({size, isFocused}) {
  const defaultSize = size || 55;
  const {theme} = useSelector(state => state.ThemeReducer);
  return (
    <View style={{width: 24, height: 24}}>
      <View
        style={{
          position: 'absolute',
          left: -15,
          top: -45,
        }}>
        <View
          style={{
            width: defaultSize,
            height: defaultSize,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isFocused ? '#24c9be' : theme.main,
            borderRadius: 100,
          }}>
          <ActiveIcon />
        </View>
      </View>
    </View>
  );
}
