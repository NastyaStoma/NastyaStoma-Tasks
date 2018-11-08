var next = document.createElement('button');
var previous = document.createElement('button');
document.body.appendChild(previous);
document.body.appendChild(next);
next.style.height = '20px';
next.innerHTML = '>';
previous.style.height = '20px';
previous.innerHTML = '<';
var CalendarPage = document.createElement('table');
CalendarPage.className = 'Calendar';
document.body.appendChild(CalendarPage);
var Month = document.createElement('p');
Month.innerHTML = '';
Month.className = 'MonthName';
Month.style.fontSize = '20px';
Month.style.marginLeft = '10px';
CalendarPage.appendChild(Month);
var Days = document.createElement('tr');
Days.className = 'List';
var Monday = document.createElement('td');
var Tuesday = document.createElement('td');
var Wednesday = document.createElement('td');
var Thursday = document.createElement('td');
var Friday = document.createElement('td');
var Saturday = document.createElement('td');
var Sunday = document.createElement('td');
Monday.innerHTML = 'Mon';
Tuesday.innerHTML = 'Tue';
Wednesday.innerHTML = 'Wed';
Thursday.innerHTML = 'Thu';
Friday.innerHTML = 'Fri';
Saturday.innerHTML = 'Sat';
Sunday.innerHTML = 'Sun';
Monday.className = 'OneOfDays'; 
Tuesday.className = 'OneOfDays';
Wednesday.className = 'OneOfDays';
Thursday.className = 'OneOfDays';
Friday.className = 'OneOfDays';
Saturday.className = 'OneOfDays';
Sunday.className = 'OneOfDays';
CalendarPage.appendChild(Days);
Days.appendChild(Monday);
Days.appendChild(Tuesday);
Days.appendChild(Wednesday);
Days.appendChild(Thursday);
Days.appendChild(Friday);
Days.appendChild(Saturday);
Days.appendChild(Sunday);
var CurrDate = new Date();//получить текущую дату
var CurrDay  = CurrDate.getDate();	//Получить число месяца, от 1 до 31.
var CurrMonth = CurrDate.getMonth();//Получить месяц, от 0 до 11.	
var CurrYear  = CurrDate.getFullYear();//Получить год (из 4 цифр)
//getDay() - 0(воскресенье) до 6(суббота)
function table(TodayMonth){
	var today = new Date(CurrYear,CurrMonth,0);// нулевого числа нет, будет последнее число предыдущего месяца
	for (var b = 0; b <= 4; b++){//weeks
		var tr = document.createElement('tr');
		for(var i = 1; i <= 7; i++)//days of week
		{
			var td = document.createElement('td');
			td.innerHTML = today.getDate();
			today.setDate(today.getDate()+1);
			tr.appendChild(td);
		}
		CalendarPage.appendChild(tr);
	}
	if (CurrMonth == 0)
	Month.innerHTML = 'Январь';
	else if (CurrMonth == 1)
	Month.innerHTML = 'Февраль';
	else if (CurrMonth == 2)
	Month.innerHTML = 'Март';
	else if (CurrMonth == 3)
	Month.innerHTML = 'Апрель';
	else if (CurrMonth == 4)
	Month.innerHTML = 'Май';
	else if (CurrMonth == 5)
	Month.innerHTML = 'Июнь';
	else if (CurrMonth == 6)
	Month.innerHTML = 'Июль';
	else if (CurrMonth == 7)
	Month.innerHTML = 'Август';
	else if (CurrMonth == 8)
	Month.innerHTML = 'Сентябрь';
	else if (CurrMonth == 9)
	Month.innerHTML = 'Октябрь';
	else if (CurrMonth == 10)
	Month.innerHTML = 'Ноябрь';
	else if (CurrMonth == 11)
	Month.innerHTML = 'Декабрь';
}
table(CurrMonth);
function nextMonth(){
	CurrMonth++;
}
function previousMonth(){
	CurrMonth=CurrMonth-1;
}
next.onclick = nextMonth();
previous.onclick = previousMonth();