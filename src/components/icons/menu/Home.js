import InActiveIcon from '@assets/svgs/navbar/home.svg';
import ActiveIcon from '@assets/svgs/navbar/home_active.svg';

export default function Home({size, isFocused}) {
  const defaultSize = size || 24;
  const Tag = isFocused ? ActiveIcon : InActiveIcon;
  return <Tag width={defaultSize} hegiht={defaultSize} />;
}
