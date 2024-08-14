import css from './AdvantageItem.module.css';
import icons from '../../assets/icons.svg';

const AdvantageItem = ({ iconName, width, height, children }) => {
  return (
    <span className={css.advantageItemContainer}>
      <svg width={width} height={height} className={css.icon}>
        <use href={`${icons}#${iconName}`}></use>
      </svg>
      {children}
    </span>
  );
};

export default AdvantageItem;
