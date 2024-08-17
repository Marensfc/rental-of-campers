export const isAddedToFavorite = id => {
  const favoriteAdverts = JSON.parse(localStorage.getItem('adverts')) || [];
  const advert = favoriteAdverts.find(advert => advert.id === id);
  if (advert !== undefined) {
    return true;
  }
};
