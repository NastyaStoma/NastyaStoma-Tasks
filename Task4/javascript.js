function primeNumbersToN(number) {
    var ArrayOfPrimeNumbers = [];
    if (number > 3) {
        for (var i = 2; i <= number; i++) {
            if (i % 2 !== 0 && i % i == 0 || i == 2) {
                if (i % 5 !== 0 && i % 3 !== 0 && i % 7 !== 0 || i == 3 || i == 5 || i == 7)
                    ArrayOfPrimeNumbers.push(i);
            }
        }
    } else {
        for (var i = 2; i <= number; i++) {
            ArrayOfPrimeNumbers.push(i);
        }
    }
    return ArrayOfPrimeNumbers;
}

function firstNprimeNumbers(amounth) {
    var ArrayOfPrimeNumbers = [];
    var FirstNprimeNumbersArray = [];
    var number = 100000;
    if (number > 3) {
        for (var i = 2; i <= number; i++) {
            if (i % 2 !== 0 && i % i == 0 || i == 2) {
                if (i % 5 !== 0 && i % 3 !== 0 && i % 7 !== 0 || i == 3 || i == 5 || i == 7)
                    ArrayOfPrimeNumbers.push(i);
            }
        }
    } else {
        for (var i = 2; i <= number; i++) {
            ArrayOfPrimeNumbers.push(i);
        }
    }
    var StringOfPrime = ArrayOfPrimeNumbers.toString().split(",");
    for (var i = 0; i < amounth; i++) {
        FirstNprimeNumbersArray.push(StringOfPrime[i]);
    }
    return FirstNprimeNumbersArray;
}

function SumOfFibonacci(limit) {
    var number = 1000000;
    var FirstRowValue = 0;
    var SecondRowValue = 1;
    var NextRowValue = 0;
    var SumOfEvenValues = 0;
    var FibonacciRow = [];
    for (var i = 0; i < number; i++) {
        NextRowValue = FirstRowValue + SecondRowValue;
        FirstRowValue = SecondRowValue;
        SecondRowValue = NextRowValue;
        FibonacciRow.push(NextRowValue);
    }
    for (i = 0; i < limit; i++) {
        if (FibonacciRow[i] % 2 == 0) {
            SumOfEvenValues += FibonacciRow[i];
        }
    }
    return SumOfEvenValues;
}

function OrderOfNumbers(number) {
    var Order = [];
    var OrderSumma = 0;
    var Result = [];
    var TenLastNum = [];
    for (var i = 0; i <= number; i++) {
        Order[i] = Math.pow(i, i);
        OrderSumma += Order[i];
    }
    var SummaString = OrderSumma.toString();
    for (var i = 0; i <= SummaString.length; i++) {
        TenLastNum[i] = SummaString[i];
    }
    var SummaReversed = TenLastNum.reverse();
    for (var i = 0; i <= 10; i++) {
        Result.push(SummaReversed[i]);
    }
    return Result;
}

function AverageOfArray(Array) {
    var Summa = 0;
    for (var i = 0; i < Array.length; i++) {
        Summa += Array[i];
    }
    return (Summa / Array.length);
}

function ArrayMaxValue(Array) {
    var MaxValue = 0;
    for (var i = 0; i < Array.length; i++) {
        if (Array[i] > Array[0]) {
            Array[0] = Array[i];
            MaxValue = Array[0];
        }
    }
    return MaxValue;
}

function UniqueStrings(Array) {
    var UniqueStringsArray = [];
    for (var i = 0; i < Array.length; i++) {
        if (!UniqueStringsArray.includes(Array[i])) {
            UniqueStringsArray.push(Array[i]);
        }
    }
    return UniqueStringsArray;
}

function Palindrome(string) {
    var ReversedString = string.split("").reverse().join("");
    if (string == ReversedString) {
        return "Данная строка - полиндром";
    } else {
        return "Данная строка не является полиндромом";
    }
}

function SummOfDigits(string) {
    Summa = 0;
    for (var i = 0; i < string.length; i++) {
        Summa += Number(string[i]);
    }
    return Summa;
}