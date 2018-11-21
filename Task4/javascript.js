function primeNumbersToN(number) {
    var ArrayOfPrimeNumbers = [];
    if (number > 3) {
        for (var i = 2; i <= number; i++) {
            if (i % 2 !== 0 && i % i == 0 || i == 2) {
                if ((i % Math.floor(Math.sqrt(i))!== 0) && i % 5 !== 0 && i % 3 !== 0 && i % 7 !== 0 || i == 3 || i == 5 || i == 7)
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

function FirstNprimeNumbers(amount) {
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
    for (var i = 0; i < amount; i++) {
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

function TenLastNumbers(number) {
    var Order = [];
    var OrderSum = 0;
    var Result = [];
    var TenLastNum = [];
    for (var i = 0; i <= number; i++) {
        Order[i] = Math.pow(i, i);
        OrderSum += Order[i];
    }
    var SumString = OrderSum.toString();
    for (var i = 0; i <= SumString.length; i++) {
        TenLastNum[i] = SumString[i];
    }
    var SumReversed = TenLastNum.reverse();
    for (var i = 0; i <= 10; i++) {
        Result.push(SumReversed[i]);
    }
    return Result;
}

function AverageOfArray(Array) {
    var Sum = 0;
    for (var i = 0; i < Array.length; i++) {
        Sum += Array[i];
    }
    return (Sum / Array.length);
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
	var result = 0;
    if (string == ReversedString) {
        result = "This string is a palindrome.";
    } else {
        result = "This string is not a palindrome.";
    }
	return result;
}

function SumOfDigits(string) {
    Sum = 0;
    for (var i = 0; i < string.length; i++) {
        Sum += Number(string[i]);
    }
    return Sum;
}