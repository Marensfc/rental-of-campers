import css from './AdvantageItem.module.css';
import icons from '../../assets/icons.svg';
import clsx from 'clsx';

const AdvantageItem = ({ iconName, width, height, children }) => {
  return (
    <span className={clsx(css.advantageItemContainer)}>
      <svg width={width} height={height} className={clsx(css.icon)}>
        <use href={`${icons}#${iconName}`}></use>
      </svg>
      {children}
    </span>
  );
};

export default AdvantageItem;
