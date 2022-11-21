// В этом маленьком назначении вам дается строка номеров, разделенных пробелами, и вы должны вернуть самое высокое и самое низкое число.

//highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers){
    var arr = numbers.split(' ');
    console.log(arr)
    let max = Math.max.apply(null, arr);
    // console.log(max)
    let min = Math.min.apply(null, arr);
    // console.log(min)
    max = String(max)
    min = String(min)
    let result = `${max} ${min}`
    return result
  
  
  
  
  
  }
  
  console.log(highAndLow("1 2 -3 4 5"))