module.exports = function multiply(first, second) {
    a = first.split('').reverse();
    b = second.split('').reverse();
    var result = [];

    for (let i = 0; a[i] ; i++) {
        for (let j = 0; b[j] ; j++) {
            if (!result[i + j]) { // если в массиве нет ячейки, то ячейке присваивается 0
                result[i + j] = 0;
            }
            result[i + j] += a[i] * b[j];
        }
    }
	//проходит циклами по массивам, и добавляет результат перемножения в массив result

    for (let i = 0; result[i]; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }
            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }

    return result.reverse().join('');
}
