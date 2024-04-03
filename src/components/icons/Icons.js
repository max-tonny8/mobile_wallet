import Active from '@assets/svgs/navbar/active.svg';
import Collectible from '@assets/svgs/navbar/collectible.svg';
import History from '@assets/svgs/navbar/history.svg';
import Setting from '@assets/svgs/navbar/setting.svg';
import Swap from '@assets/svgs/navbar/swap.svg';
import Home from '@assets/svgs/navbar/home.svg';

export const Icons = {
  Active,
  Collectible,
  History,
  Setting,
  Swap,
  Home,
};

export default function Icon({type, color, size = 24, style = null}) {
  const Tag = type;
  return <Tag width={size} height={size} fill={'#fff'} />;
}
