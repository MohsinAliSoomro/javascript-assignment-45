function sandwichSummary(items = []) {
  const unitPrice = 50;
  items.forEach((item) => {
    console.log("-----------------------------------");
    console.log(`Quantity : ${item}`);
    console.log(`Total Amount : ${item * unitPrice}`);
    console.log("-----------------------------------\n");
  });
}
sandwichSummary([20, 5, 2, 4]);
