// Учитывая строку, необходимо вернуть строку, в которой каждый символ (с учетом регистра) повторяется один раз.

// Примеры (Вход -> Выход):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + str[i]
  }
  console.log(result)
  return result
}

doubleChar('1234')

// function doubleChar(str) { можно было так
//   let res = '';
//   for (let i in str) {
//     res += str[i].repeat(2);
//   }
//   return res;
// }
