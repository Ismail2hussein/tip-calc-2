function calculateTip(bill) {
    let tip;
    if (bill >= 80 && bill <= 300) {
      tip = bill * 0.15;
    } else {
      tip = bill * 0.2;
    }
    return tip;
  }
  
  const bill1 = 400;
  const bill2 = 300;
  const tip1 = calculateTip(bill1);
  const tip2 = calculateTip(bill2);
  console.log(`For bill of ${bill1}, the tip is ${tip1}`);
  console.log(`For bill of ${bill2}, the tip is ${tip2}`);