import InActiveIcon from '@assets/svgs/navbar/history.svg';
import ActiveIcon from '@assets/svgs/navbar/history_active.svg';

export default function Home({size, isFocused}) {
  const defaultSize = size || 24;
  const Tag = isFocused ? ActiveIcon : InActiveIcon;
  return <Tag width={defaultSize} hegiht={defaultSize} />;
}
