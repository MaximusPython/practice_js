// Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.

// Пример: n=5 --> [5,4,3,2,1]

function ReverseN(n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  arr.reverse()

  console.log(arr)
  return arr
}

ReverseN([7])

// const reverseSeq = n => {
//   return Array.from({length: n}, (v, i) => i + 1).reverse();
// };
