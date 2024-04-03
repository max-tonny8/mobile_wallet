import InActiveIcon from '@assets/svgs/navbar/setting.svg';
import ActiveIcon from '@assets/svgs/navbar/setting_active.svg';

export default function Setting({size, isFocused}) {
  const defaultSize = size || 24;
  const Tag = isFocused ? ActiveIcon : InActiveIcon;
  return <Tag width={defaultSize} hegiht={defaultSize} />;
}
