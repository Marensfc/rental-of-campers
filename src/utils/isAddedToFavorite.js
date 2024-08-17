export const isAddedToFavorite = id => {
  const favoriteAdverts = JSON.parse(localStorage.getItem('adverts')) || [];
  const advert = favoriteAdverts.find(advert => advert.requiredInfo.id === id);
  if (advert !== undefined) {
    return true;
  }
};
