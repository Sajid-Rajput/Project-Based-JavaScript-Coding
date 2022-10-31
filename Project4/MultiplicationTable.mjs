let multiplicationTable = [];

let value = 10;

for (let index = 0; index <= value; index++) {
  const tempArr = [];

  for (let index1 = 0; index1 <= value; index1++) {
    tempArr.push(index * index1);
  }
  multiplicationTable.push(tempArr);
}

console.table(multiplicationTable);