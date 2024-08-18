export const sortDetailedInfo = advert => {
  const vehicleDetails = {
    form: advert.form,
    length: advert.length,
    width: advert.width,
    height: advert.height,
    tank: advert.tank,
    consumption: advert.consumption,
    gas: advert.details.gas,
    water: advert.details.water,
  };
  const sortedInfo = {
    CD: advert.details.CD,
    radio: advert.details.radio,
    toilet: advert.details.toilet,
    freezer: advert.details.freezer,
    hob: advert.details.hob,
    microwave: advert.details.microwave,
    gas: advert.details.gas,
    water: advert.details.water,
  };
  return {
    advantages: sortAdvantages(sortedInfo),
    vehicleDetails: sortAdvantages(vehicleDetails),
  };
};

export const sortAdvantages = obj => {
  let sortedObj = { ...obj };

  for (let key in sortedObj) {
    if (String(sortedObj[key]).startsWith(0)) {
      delete sortedObj[key];
    }
  }
  return sortedObj;
};
