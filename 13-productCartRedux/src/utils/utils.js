export function indianCurrency(amt) {
  if (amt) {
    amt = amt.toString();
    let lastThree = amt.substring(amt.length - 3);
    let otherNumbers = amt.substring(0, amt.length - 3);
    if (otherNumbers != '') lastThree = ',' + lastThree;
    let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;
    return res;
  }
}
