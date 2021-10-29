export const getFilteredData = (
  prodArr,
  { showCasual, showFormal, showSports, showFastDelivery }
) => {
  let categoryFilteredArr = [];
  if (showCasual) {
    categoryFilteredArr = prodArr.filter(
      ({ category }) => category === "casual"
    );
  } else if (showFormal) {
    categoryFilteredArr = prodArr.filter(
      ({ category }) => category === "formal"
    );
  } else if (showSports) {
    categoryFilteredArr = prodArr.filter(
      ({ category }) => category === "sports"
    );
  } else {
    categoryFilteredArr = [...prodArr];
  }
  if (showFastDelivery) {
    return categoryFilteredArr.filter(({ delivery }) => delivery === "fast");
  }
  return categoryFilteredArr;
};
