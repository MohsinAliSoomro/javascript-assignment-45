function carInfo(manufacturer, modelName, color, year) {
  const carObject = {
    manufacturer,
    modelName,
    color,
    year,
  };
  console.log(JSON.stringify(carObject));
  return carObject;
}

carInfo("Honda", "Civic", "Black", "2022");
carInfo("Kia", "Sportage", "Black", "2022");
