const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries;
function reducer(arr, reduce, init) {
  totalBatteries = init;
  for (const ele of arr) {
    totalBatteries = reduce(totalBatteries, ele);
  }
  return totalBatteries;
}
function batteries(totalAmount, ele) {
  return totalAmount + ele;
}

reducer(batteryBatches, batteries, 0);
