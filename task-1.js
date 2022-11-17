// Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).



function findShort(s){
    let arr = s.split(" ")
    let p = []
    for (i of arr) {
      p.push(i.length)
  
    }
    return Math.min.apply(null, p) // возратит самое минимальное число массива = 3
  }
  
  
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))