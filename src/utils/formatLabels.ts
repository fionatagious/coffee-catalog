const formatLabels = (keysArray: string[]) => {
  // Convert snake_case to Capital Case
  // e.g. "coffee_leaf_rust" -> "Coffee leaf rust"
  const resultArray = keysArray.map((element) => {
    return (
      element.charAt(0).toUpperCase() + element.slice(1).replaceAll("_", " ")
    );
  });
  return resultArray;
};

export default formatLabels;
