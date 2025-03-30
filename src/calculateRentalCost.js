/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const afterSevenDaysOff = 50;
  const afterThreeDaysOff = 20;

  if (days >= 7) {
    return dailyRate * days - afterSevenDaysOff;
  }

  if (days >= 3) {
    return dailyRate * days - afterThreeDaysOff;
  }

  return dailyRate * days;
}

module.exports = calculateRentalCost;
