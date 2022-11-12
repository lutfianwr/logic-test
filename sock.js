function sock(ar) {
  // Write your code here
  let pairs = 0;
  ar.sort();
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == ar[i + 1]) {
      i++;
      pairs++;
    }
  }
  return pairs;
}
console.log(sock([10, 20, 20, 10, 10, 30, 50, 10, 20])); //3
console.log(sock([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])); //6
console.log(sock([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); //4
