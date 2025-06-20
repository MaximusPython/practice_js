// Завершите решение так, чтобы оно разделило строку на пары из двух символов. Если строка содержит нечетное количество символов, 
//то она должна заменить отсутствующий второй символ конечной пары подчеркиванием ('_').

// Примеры:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let arr = [];

for (let i = 0; i < str.length;  i = i + 2) {
    arr.push(str.slice(i, i + 2));
    }

for (let l = 0; l < arr.length; l++) {
    if (arr[l].length < 2) {
        arr[l] = arr[l] + "_"
    }
}
return arr
}
console.log(solution("dwfd2wf"))

