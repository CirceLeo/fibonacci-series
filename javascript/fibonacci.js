function fibonacci(num) {
  if (num === 0){
    return 0
  }
  // else {
    let temp 
    let first = 0
    let second = 1
    for (let i = 0; i < num - 1; i++){
    // while (num >= 1){
      // console.log(temp)
      temp = second
      second = first + second
      first = temp
      // num --
      // sum = (first + second)
      // first = second
      // second = sum
    }
    return second
  //}
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
