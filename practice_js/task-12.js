// Введение
// Первый век охватывает период с 1 по 100 год включительно , второй век — с 101 по 200 год включительно и т. д.

// Задача
// Если указан год, верните столетие, в котором он находится.

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28

function century(year) {
  if (Number(year)) {
    if (year % 100 !== 0) {
      year = year + 100
    }
    year = year / 100
  }
  console.log(Math.floor(year))
  return Math.floor(year)
}

century(680)

// function century(year) { // можно было так сделать через функци/
//   return Math.ceil(year / 100); }
