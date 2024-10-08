export const removeCardFromLocalStorage = id => {
  const parsedAdverts = JSON.parse(localStorage.getItem('adverts')) || [];
  const filteredAdverts = parsedAdverts.filter(
    advert => advert.requiredInfo.id !== id
  );
  localStorage.setItem('adverts', JSON.stringify(filteredAdverts));
};
