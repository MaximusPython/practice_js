function findShort(s){
    let arr = s.split(" ")
    let p = []
    for (i of arr) {
      p.push(i.length)
  
    }
    return Math.min.apply(null, p) 
  }
  
  
  console.log(findShort("bitcoin take over the world maybe who knows perhaps"))