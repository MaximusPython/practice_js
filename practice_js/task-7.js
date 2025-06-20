 //Каждое слово в предложении разделено пробелами. Последняя буква каждого слова в предложении превращается в строчные буквы, 
//  // а остальные буквы пишутся с заглавной буквы. Выглядит очень странно? Потому что это форма инопланетного языка ;-)

function alienLanguage(str){
    let words=str.split(" ");
    for (i = 0; i < words.length; i++) {
         let o  = words[i].slice(0, -1).toUpperCase() 
         let t =  words[i].substring( words[i].length-1, words[i].length).toLowerCase() // вот так выводится последний элемент можно еще вот так let lastChar = words[i].slice(-1).toLowerCase();  

         words[i] = o + t
         
         
         //выведется первые до последнего + и последний элемент в разных регистрах
          // путаница была из за несколько for и двух разных переменных которых мы не можем так склетиь в итоге, надо в одном цикле все и в одной переменной
          // оказывается можно
          
      }
        
     
      
    return words.join(" ") 
  }
  
   
  console.log(alienLanguage("this ids Eaaadwne eijjhE"));
  
  //output:
 // This Is An Example.

 