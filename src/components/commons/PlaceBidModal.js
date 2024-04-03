import {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import CheckBox from 'react-native-check-box';

import CommonText from '@components/commons/CommonText';
import {colorOpacity} from '@src/utils/ColorUtil';

import EthIcon from '@assets/svgs/symbol.svg';
import MinusIcon from '@assets/svgs/common/minus.svg';
import PlusIcon from '@assets/svgs/common/plus.svg';

export default function PlaceBidModal({visible, setVisible}) {
  const [checked, setChecked] = useState(false);
  const {theme} = useSelector(state => state.ThemeReducer);
  const navigation = useNavigation();

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity
        onPress={() => setVisible(false)}
        activeOpacity={1}
        style={[
          styles.absolute,
          {
            backgroundColor: colorOpacity(theme.secondary1, 0.3),
          },
        ]}></TouchableOpacity>
      <View
        style={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
          justifyContent: 'center',
        }}>
        <View style={[styles.placeBidContainer, {backgroundColor: '#232627'}]}>
          <CommonText style={[styles.placeBidLabel, {color: theme.primary}]}>
            Place a bid
          </CommonText>
          <View style={[styles.amountController, {backgroundColor: '#4C5153'}]}>
            <TouchableOpacity
              style={[
                styles.bidAmountController,
                {backgroundColor: theme.secondary1},
              ]}>
              <MinusIcon width={16} height={16} />
            </TouchableOpacity>
            <View style={styles.bidPrice}>
              <EthIcon height={20} />
              <CommonText style={[styles.amount, {color: theme.primary}]}>
                0.038 ETH
              </CommonText>
            </View>
            <TouchableOpacity
              style={[
                styles.bidAmountController,
                {backgroundColor: theme.secondary1},
              ]}>
              <PlusIcon width={16} height={16} />
            </TouchableOpacity>
          </View>
          <CommonText
            style={[
              styles.accountBalance,
              {color: colorOpacity(theme.primary, 0.7)},
            ]}>
            Balance: 0.1345 ETH
          </CommonText>
          <View style={styles.checkBoxContainer}>
            <CheckBox
              isChecked={checked}
              onClick={() => setChecked(!checked)}
              checkBoxColor={theme.main}
              checkedCheckBoxColor={theme.main}
            />
            <CommonText style={[styles.bidDescription, {color: theme.primary}]}>
              By Checking this box, I agree to NFT’s Terms of Service{' '}
            </CommonText>
          </View>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={() => {
              setVisible(false);
              navigation.navigate('SuccessScreen', {
                title: 'Place a bid Success',
                description:
                  'You have successfully bid on the item and it will be on the list',
                callback: () => navigation.navigate('Home'),
              });
            }}>
            <CommonText
              style={[
                styles.saveBtnLabel,
                {color: theme.primary, backgroundColor: theme.main},
              ]}>
              Save
            </CommonText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  placeBidContainer: {
    marginHorizontal: 24,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  placeBidLabel: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  amountController: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    columnGap: 16,
    padding: 17,
    marginBottom: 8,
  },
  bidPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  bidAmountController: {
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: 'Satoshi-Bold',
  },
  accountBalance: {textAlign: 'center', marginBottom: 24},
  checkBoxContainer: {
    flexDirection: 'row',
    columnGap: 12,
    marginBottom: 24,
  },
  bidDescription: {flex: 1},
  saveBtn: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  saveBtnLabel: {
    textAlign: 'center',
    paddingVertical: 14,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Satoshi-Bold',
    borderRadius: 10,
  },
});
