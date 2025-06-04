const formatLabels = (keysArray: string[]) => {
  keysArray.forEach((element, index, array) => {
    array[index] =
      element.charAt(0).toUpperCase() + element.slice(1).replaceAll("_", " ");
  });
  const labelsArray = keysArray.splice(0, 21);
  return labelsArray;
};

export default formatLabels;
