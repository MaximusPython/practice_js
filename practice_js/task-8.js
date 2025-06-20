// У меня есть кошка и собака.

// Я получил их одновременно с котенком/щенком. Это было humanYearsмного лет назад.

// Верните их возраст сейчас как [ humanYears, catYears, dogYears]

// ПРИМЕЧАНИЯ:

// humanYears>= 1
// humanYearsтолько целые числа
// Кошачьи годы
// 15кошачьи годы для первого года
// +9кошачьи годы для второго года
// +4cat years за каждый последующий год
// Годы Собаки
// 15собачьи годы для первого года
// +9собачьи годы для второго года
// +5собачьи годы за каждый последующий год

const humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0
  let dogYears = 0
  if (typeof humanYears !== 'number' || humanYears < 1) return []

  if (humanYears >= 1) {
    ;(catYears = catYears + 15), (dogYears = dogYears + 15)
  }
  if (humanYears >= 2) {
    ;(catYears = catYears + 9), (dogYears = dogYears + 9)
  }
  if (humanYears > 2) {
    ;(catYears = catYears + 4 * (humanYears - 2)),
      (dogYears = dogYears + 5 * (humanYears - 2))
  }

  console.log([humanYears, catYears, dogYears])
  return [humanYears, catYears, dogYears]
}

humanYearsCatYearsDogYears(10)

// var humanYearsCatYearsDogYears = function(humanYears) { // так еще можно
//   let CatYears
//   let DogYears
//   if(humanYears==1){
//     CatYears = 15
//     DogYears = 15
//   }
//   else if(humanYears==2){
//     CatYears = 24
//     DogYears = 24
//   }
//   else if(humanYears>2){
//     CatYears = 15 + 9 + ((humanYears-2)*4)
//     DogYears = 15 + 9 + ((humanYears-2)*5)
//   }

//   return [humanYears,CatYears,DogYears];
// }
