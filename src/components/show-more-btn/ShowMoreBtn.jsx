import css from './ShowMoreBtn.module.css';

const ShowMoreBtn = ({ openModal }) => {
  return (
    <button type="button" className={css.showMoreBtn} onClick={openModal}>
      Show more
    </button>
  );
};

export default ShowMoreBtn;
