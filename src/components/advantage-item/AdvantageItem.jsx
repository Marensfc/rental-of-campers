import css from './AdvantageItem.module.css';
import icons from '../../assets/icons.svg';
import clsx from 'clsx';

const AdvantageItem = ({
  iconName,
  width,
  height,
  children,
  onlyFill,
  uppercase,
}) => {
  const isContainNumber = Number(children.slice(0, 1));

  return (
    <span
      className={clsx(
        css.advantageItemContainer,
        isContainNumber ? css.lowercase : css.capitalize,
        uppercase && css.uppercase
      )}
    >
      <svg
        width={width}
        height={height}
        className={clsx(onlyFill ? [css.onlyFill] : [css.icon])}
      >
        <use href={`${icons}#${iconName}`}></use>
      </svg>
      {children}
    </span>
  );
};

export default AdvantageItem;
