export function generateCountry(countryList) {
  countryList.globalCountry = {};
  countryList.globalCountryList.forEach((c) => {
    countryList.globalCountry[c.alpha2] = c;
  });
  delete countryList.globalCountryList;
}

export function generateDial(dialList, countryCollection) {
  dialList.globalDial = {};
  dialList.globalDialList.forEach((c) => {
    dialList.globalDial[c.countryCode] = c;
    const countryData = countryCollection.globalCountry[c.countryCode.toLowerCase()];
    dialList.globalDial[c.countryCode].countryName = countryData ? countryData.name : '?????';
  });
  delete dialList.globalDialList;
}
