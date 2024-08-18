// export const sortInfo = advert => {
//   const sortedInfo = {
//     id: advert._id,
//     name: advert.name,
//     price: advert.price,
//     rating: advert.rating,
//     reviews: advert.reviews,
//     location: advert.location,
//     description: advert.description,
//     previewImg: advert.gallery[0],
//     gallery: advert.gallery,
//     vehicleForm: advert.form,
//     mainAdvantages: {
//       adults: advert.adults,
//       children: advert.children,
//       AC: advert.details.airConditioner,
//       transmission: advert.transmission,
//       engine: advert.engine,
//       kitchen: advert.details.kitchen,
//       TV: advert.details.TV,
//       shower: advert.details.shower,
//       beds: advert.details.beds,
//     },
//     additionAdvantages: {
//       airConditioner: advert.details.airConditoner,
//       bathroom: advert.details.bathroom,
//       CD: advert.details.CD,
//       radio: advert.details.radio,
//       toilet: advert.details.toilet,
//       freezer: advert.details.freezer,
//       hob: advert.details.hob,
//       microwave: advert.details.microwave,
//     },
//     vehicleDetails: {
//       length: advert.length,
//       width: advert.width,
//       height: advert.height,
//       tank: advert.tank,
//       consumption: advert.consumption,
//       gas: advert.details.gas,
//       water: advert.details.water,
//     },
//   };

//   return sortAdvantages(sortedInfo);
// };

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
