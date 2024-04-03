import InActiveIcon from '@assets/svgs/navbar/collectible.svg';
import ActiveIcon from '@assets/svgs/navbar/collectible_active.svg';

export default function Collectible({size, isFocused}) {
  const defaultSize = size || 24;
  const Tag = isFocused ? ActiveIcon : InActiveIcon;
  return <Tag width={defaultSize} hegiht={defaultSize} />;
}
