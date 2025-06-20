// function multipleOfIndex(array) {
//   const arr = []

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] % i === 0) {
//       arr.push(array[i])
//     }

//     console.log(arr)
//     return arr
//   }
// }

// multipleOfIndex([22, -6, 32, 82, 9, 25])

//Возвращает новый массив, состоящий из элементов, кратных своему индексу во входном массиве (длина > 1).
// function FlickSwitch(array) { == одно решение
//   let arr = []
//   let flag = true

//   for (let elem of array) {
//     if (elem === 'flick') {
//       flag = !flag
//     }
//     arr.push(flag)
//   }
//   console.log(arr)
//   return arr
// }

function FlickSwitch(arr) {
  // == второе решение
  let flag = true
  return arr.map((element) => {
    if (element === 'flick') flag = !flag
    return flag
  })
}

FlickSwitch(['flick', 'chocolate', 'adventure', 'sunshine', 'flick'])

// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
