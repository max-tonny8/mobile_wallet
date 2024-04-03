import * as React from 'react';
import {useState} from 'react';
import {StyleSheet} from 'react-native';
import CommonTouchableOpacity from '@components/commons/CommonTouchableOpacity';
import {useSelector} from 'react-redux';
import Price from '@components/Price';

function Balance() {
  const {theme} = useSelector(state => state.ThemeReducer);
  const [active, setActive] = useState(false);
  const {totalBalance} = useSelector(state => state.WalletReducer);
  return (
    <CommonTouchableOpacity
      style={styles.balanceContainer}
      onPress={() => {
        setActive(!active);
      }}>
      <Price style={[styles.balanceText, {color: theme.text}]}>
        {totalBalance}
      </Price>
    </CommonTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default Balance;
