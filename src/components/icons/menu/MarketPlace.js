import InActiveIcon from '@assets/svgs/navbar/marketplace.svg';
import ActiveIcon from '@assets/svgs/navbar/marketplace_active.svg';

export default function MarketPlace({size, isFocused}) {
  const defaultSize = size || 24;
  const Tag = isFocused ? ActiveIcon : InActiveIcon;
  return <Tag width={defaultSize} hegiht={defaultSize} />;
}
