/*Найти среднее арифметическое чисел из массива.*/
function arifmitich()
{
	var j=0;
	var mass = [2,2,5,5,13];
	for(var i=0; i < mass.length; i++)
		{
			j+=mass[i];
		}
	console.log(j/mass.length);
}
console.log("Среднее арифметическое массива:");
arifmitich();

/*Найти максимальное число в массиве.*/
function maxValue()
{
	var mas = [1,12,50,10,8];
	for (var i = 0; i < mas.length; i++)
	{
		if(mas[i] > mas[0])
		{
			mas[0] = mas[i];
		}
	}
	console.log(mas[0]);
}
console.log("Максимальное число в массиве:");
maxValue();

/*Определить, является ли фраза/слово палиндромом*/
function palindrom() 
{
	var s = "moom";
    for (var i = 0; i < s.length; i++) 
	{
      if (s[i] === s[s.length - 1 - i]) 
	  { 
        console.log('является');
      } 
		else 
	  {
        console.log('не является');
      }
	}
 }
console.log("Строка - палиндром:");
palindrom();

/*Найти сумму первых n четных чисел фибоначчи. Числа фибоначчи - первые два числа равны 1 и 1, а каждое последующее число равно сумме двух предыдущих чисел. 1 <= n <= 100000*/
var n = 0;
function fibonachchi(n) 
{
	//Числа Фибоначчи 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711,..
	var i = 1, j = 2, next = 0, summa = 2;
	//i=0+1,j=1+1-(начальные) значения ряда
	//next-сумма предыдущих значений ряда
	//summa - сумма чётных значений ряда(поэтому начинается с 2)
		while ((i + j) < n) 
			{
				next = i + j; //3 = 1+2
				i = j;//1=2
				j = next;//2=3
			if (next % 2 == 0) 
				{
					summa += next;//если сумма значений чётная,то она приплюсовывается в summa (чётных значений)
				}
			}
		console.log(summa);
}
console.log("Сумма n чётных чисел Фибоначчи:");
fibonachchi(100);//2+8+34

/*Найти сумму цифр данного числа*/
function number()
{
	//если число - строка
	var num = "2222", summ = 0;
	for (var i = 0; i < num.length; i++)
  	summ += Number(num[i]);
	console.log(summ);
}
console.log("Сумма цифр числа:");
number();

/*Найти все простые числа до заданного n. Простые числа - это те числа, которые делятся только на себя и на 1. 1 <= n 1 000 000 000*/
function isPrime(num) 
{
	if (num > 3)
	{
		console.log("Список НЕ простых чисел:");
			for (var i = 4; i <= num; i++)
			{
				for (var j = 2; j < i; j=j+1)
				{
					if(i % j == 0)
					{
						console.log(i + " НЕ простое число");
					}				
				}
			}
		console.log("Список ПРОСТЫХ чисел:");
			for (var i = 2; i <= num; i++)
			{
					var a = 2;
					if(i % a !== 0 && i % i == 0 || i==2)
					{
						if (i % 5 !== 0 && i % 3 !== 0 &&i % 7 !== 0 ||  i==3||i==5||i==7)
						console.log(i+ " простое число");	
					}
			}	
	}
	else
	{
		for (var i = 1; i <= num; i++)
			{
				console.log(i+ " простое");
			}
	}
}
console.log("Простые и не простые числа:");
//2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,...
isPrime(100);

/*Серия чисел, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317 (^ - степень числа). Найдите 10 последних цифр результата такой последовательности, для заданного n. 1 <= n <= 1000*/
function posledovat(n)
{
	var massive=[];
	var k=0;
	for(var i=0; i<=n; i++)
		{
			massive[i]=Math.pow(i,i);
			k+=massive[i];
		}
	console.log("Результат последовательности: " + k);
	var m = k.toString();
	var TenLastNum=[];
	for(var j=0;j<=m.length;j++)
		{
			TenLastNum[j]=m[j];
			//console.log(TenLastNum[j]);
		}
	var z = TenLastNum.reverse();
	//console.log(z);
	var l
	for(var l=0;l<=10;l++)
		{
			console.log(z[l]);
		}
}
posledovat(13);


/*Найдите все уникальные строки в массиве.*/
/*Найти первые n простых чисел. 1 =< n <= 1000000*/