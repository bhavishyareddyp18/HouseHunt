export const calculateScore = (property, userPrefs) => {

  let score = 0;

  if (userPrefs.city === property.city)
    score += 40;

  if (userPrefs.type === property.type)
    score += 25;

  if (
    property.rent >= userPrefs.minPrice &&
    property.rent <= userPrefs.maxPrice
  ) {
    score += 25;
  }

  if (property.bedrooms === userPrefs.bedrooms)
    score += 10;

  return score;
};