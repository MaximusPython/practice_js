// Возвращает новый массив, состоящий из элементов, кратных своему индексу во входном массиве (длина > 1).

// Некоторые случаи:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

function multipleOfIndex(arr) {
  arr = arr.filter((element, index) => element % index === 0 || element == 0)
  console.log(arr)
  return arr
}

multipleOfIndex([68, -1, 0, 1, -7, 10, 10])

// function multipleOfIndex(array) { или так
//   let res = []

//   if(array[0] === 0){
//     res.push(array[0])
//   }

//   for(let i = 1; i < array.length; i++){
//     if(array[i] % i === 0){
//       res.push(array[i])
//     }
//   }}
//   return res
