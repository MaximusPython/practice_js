function findShort(s){
    let arr = s.split(" ")
    let p = []
    for (i of arr) {
      p.push(i.length)
  
    }
    return Math.min.apply(null, p) 
  }
  
  
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))



   // Задача

// Кодирование в функции cutIt, функция принимает 1 параметр: обр. arr — массив строк.

// Первая миссия: Обходя обр, найти кратчайшую длину строки.

// Вторая миссия: снова пройти через arr, перехватить все строки до кратчайшей длины строки (начиная с index0). 
// вы можете использовать один из slice() substring() или substr() сделать это. вернуть результат после завершения работы.

function cutIt(arr){
  k = []
  f = []
  m = 0
  for (i of arr) {
      k.push(i.length)         
      let min = Math.min.apply(null, k)
      m = min
      }
      
  for (i of arr) {
      f.push(i.slice(0, m))

  }   
  
       
  
  return f
}

console.log(cutIt(["codewars","javascript","java"]))


 