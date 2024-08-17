export const addCardToLocalStorage = data => {
  const parsedAdverts = JSON.parse(localStorage.getItem('adverts')) || [];
  if (parsedAdverts.length === 0) {
    const newAdvert = [data];
    localStorage.setItem('adverts', JSON.stringify(newAdvert));
    return;
  }
  if (parsedAdverts.length > 0) {
    const newSavedCollection = [...parsedAdverts, data];
    localStorage.setItem('adverts', JSON.stringify(newSavedCollection));
  }
};
