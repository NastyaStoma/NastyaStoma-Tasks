/*Найти среднее арифметическое чисел из массива.*/
function arifmitich() {
    var j = 0;
	console.log("Среднее арифметическое массива:");
    for (var i = 0; i < arguments.length; i++) {
        j += arguments[i];
    }
	return (j / arguments.length);
}

/*Найти максимальное число в массиве.*/
function maxValue() {
	var j = 0;
	console.log("Максимальное число в массиве:");
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > arguments[0]) {
            arguments[0] = arguments[i];
			j = arguments[0];
        }
    }
    return j;
}

/*Определить, является ли фраза/слово палиндромом*/
function palindrom() {
    var s = "molpplom";
	console.log("Строка - палиндром:");
    for (var i = 0; i < s.length; i++) {
        if (s[i] === s[s.length - 1 - i]) {
            return "является";
        } else {
            return "не является";
        }
    }
}

/*Найти сумму первых n четных чисел фибоначчи. Числа фибоначчи - первые два числа равны 1 и 1, а каждое последующее число равно сумме двух предыдущих чисел. 1 <= n <= 100000*/
function fibonachchi(n) {
    //Числа Фибоначчи 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711,..
    var i = 1,
        j = 2,
        next = 0,
        summa = 2;
    //i=0+1,j=1+1-(начальные) значения ряда
    //next-сумма предыдущих значений ряда
    //summa - сумма чётных значений ряда(поэтому начинается с 2)
	console.log("Сумма n чётных чисел Фибоначчи:");
    while ((i + j) < n) {
        next = i + j; //3 = 1+2
        i = j; //1=2
        j = next; //2=3
        if (next % 2 == 0) {
            summa += next; //если сумма значений чётная,то она приплюсовывается в summa (чётных значений)
        }
    }
	return summa;
}

/*Найти сумму цифр данного числа*/
function number(num) {
    //если число - строка
    //var num = "2222",
        summ = 0;
	console.log("Сумма цифр числа:");
    for (var i = 0; i < num.length; i++){
        summ += Number(num[i]);		
	}
    return summ;
}

/*Найдите все уникальные строки в массиве.*/
function uniqstrings() {
    //дополнительный массив
    var massive = [];
	console.log("Все уникальные строки в массиве:");
    for (var i = 0; i < arguments.length; i++) {
        //искомый элемент arguments[i] 
        if (massive.indexOf(arguments[i]) < 0) {
            //добавляем элементы в конец дополнительного
            //массива massive
            massive.push(arguments[i]);
        }
    }
    return massive;
}
//слова выбиваются впорядке того, как записаны
//т.е. первое want остаётся, а все остальные после него - нет
//uniqstrings("i", "i", "want", "to", "want", "want", "have", "a", "rest", "rest", "at", "home", "please");

/*Серия чисел, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317 (^ - степень числа). Найдите 10 последних цифр результата такой последовательности, для заданного n. 1 <= n <= 1000*/
function posledovat(n) {
    var massive = [];
    var k = 0;
    for (var i = 0; i <= n; i++) {
        massive[i] = Math.pow(i, i);
        k += massive[i];
    }
    console.log("Результат последовательности: " + k);
    var m = k.toString();
    var TenLastNum = [];
    for (var j = 0; j <= m.length; j++) {
        TenLastNum[j] = m[j];
    }
	console.log("10 последних цифр результата такой последовательности:");
    var z = TenLastNum.reverse();
    for (var l = 0; l <= 10; l++) {
        console.log(z[l]);
		return z[l];
    }
}

/*Найти все простые числа до заданного n. Простые числа - это те числа, которые делятся только на себя и на 1. 1 <= n 1 000 000 000*/
function isPrime(num) {
    if (num > 3) {
        console.log("Список НЕ простых чисел:");
        for (var i = 4; i <= num; i++) {
            for (var j = 2; j < i; j = j + 1) {
                if (i % j == 0) {
                    console.log(" НЕ простое число");
					return i;
                }
            }
        }
        console.log("Список ПРОСТЫХ чисел:");
        for (var i = 2; i <= num; i++) {
            var a = 2;
            if (i % a !== 0 && i % i == 0 || i == 2) {
                if (i % 5 !== 0 && i % 3 !== 0 && i % 7 !== 0 || i == 3 || i == 5 || i == 7)
                    console.log(" простое число");
					return i;
            }
        }
    } else {
        for (var i = 1; i <= num; i++) {
            console.log(" простое");
			return i;
        }
    }
}
// простые числа - 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,...


/*Найти первые n простых чисел. 1 =< n <= 1000000*/
/*function PrimeAmounth(numbers) {
	if (numbers> 3) {
        for (var i = 2; i <= numbers; i++) {
            var a = 2;
            if (i % a !== 0 && i % i == 0 || i == 2) {
                if (i % 5 !== 0 && i % 3 !== 0 && i % 7 !== 0 || i == 3 || i == 5 || i == 7)
                    console.log(i + " простое число");
            }
        }
    }
	else {
        for (var i = 1; i <= numbers; i++) {
            console.log(i + " простое");
        }
    }	
}
console.log("Первые n простых чисел:");
PrimeAmounth(20);*/