export function fiveStarsRatingToPercentage(rating = 0) {
  const SINGLE_STAR_PERCENTAGE = 20;
  const ratingPercentage = rating * SINGLE_STAR_PERCENTAGE;

  return ratingPercentage;
}
