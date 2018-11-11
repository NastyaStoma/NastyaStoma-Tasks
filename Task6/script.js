document.body.style.fontFamily = 'Suranna';
document.body.style.fontWeight = '600';
document.body.style.fontSize = '20px';
var next = document.createElement('button');
var previous = document.createElement('button');
document.body.appendChild(previous);
document.body.appendChild(next);
previous.id = 'Prev';
next.id = 'Nex';
next.style.height = '20px';
next.style.marginLeft = '380px';
next.innerHTML = '>';
next.style.border = 'none';
next.style.background = 'none';
next.style.outline = 'none';
next.style.fontSize = '40px';
previous.style.height = '20px';
previous.innerHTML = '<';
previous.style.border = 'none';
previous.style.background = 'none';
previous.style.outline = 'none';
previous.style.fontSize = '40px';
var content = document.createElement('div');
document.body.appendChild(content);
content.className = "content"
content.style.display = 'flex';
var CalendarPage = document.createElement('table');
CalendarPage.className = 'CalendarPage';
content.appendChild(CalendarPage);
var Month = document.createElement('p');
Month.className = 'Month';
Month.style.fontSize = '20px';
Month.style.marginLeft = '10px';
document.body.appendChild(Month);
var Days = document.createElement('tr');
Days.className = 'List';
var Monday = document.createElement('td');
var Tuesday = document.createElement('td');
var Wednesday = document.createElement('td');
var Thursday = document.createElement('td');
var Friday = document.createElement('td');
var Saturday = document.createElement('td');
var Sunday = document.createElement('td');
CalendarPage.appendChild(Days);
Days.style.height = '0px';
Days.appendChild(Monday);
Days.appendChild(Tuesday);
Days.appendChild(Wednesday);
Days.appendChild(Thursday);
Days.appendChild(Friday);
Days.appendChild(Saturday);
Days.appendChild(Sunday);
var CurrDate = new Date();
var CurrDay = CurrDate.getDate();
var CurrMonth = CurrDate.getMonth();
var CurrYear = CurrDate.getFullYear();
function DaysNames()
{
	var NamesWrapp = document.createElement('div');
	content.appendChild(NamesWrapp);
	NamesWrapp.style.display = 'flex';
	NamesWrapp.style.maxHeight = '30px';
	NamesWrapp.style.position = 'absolute';
	NamesWrapp.style.marginTop = '10px';
	NamesWrapp.style.fontSize = '25px';
	var mon = document.createElement('p');
    NamesWrapp.appendChild(mon);
	mon.innerHTML = "Mon";
	mon.style.marginLeft ='10px';
	mon.style.marginRight ='20px';
	var tue = document.createElement('p');
    NamesWrapp.appendChild(tue);
	tue.innerHTML = "Tue ";
	tue.style.marginRight ='22px';
	var wed = document.createElement('p');
    NamesWrapp.appendChild(wed);
	wed.innerHTML = "Wed ";
	wed.style.marginRight ='20px';
	var thu = document.createElement('p');
    NamesWrapp.appendChild(thu);
	thu.innerHTML = "Thu ";
	thu.style.marginRight ='30px';
	var fri = document.createElement('p');
    NamesWrapp.appendChild(fri);
	fri.innerHTML = "Fri ";
	fri.style.marginRight ='35px';
	var sat = document.createElement('p');
    NamesWrapp.appendChild(sat);
	sat.innerHTML = "Sat ";
	sat.style.marginRight ='30px';
	var sun = document.createElement('p');
    NamesWrapp.appendChild(sun);
	sun.innerHTML = "Sun ";
	sun.style.color = '#A52A2A';
}
DaysNames();
function table(TodayMonth) {
    var p = document.createElement('p');
    CalendarPage.appendChild(p);
    p.innerHTML = CurrMonth;
    //p.style.textTransform = 'uppercase';
    p.style.width = '10px';
    p.style.fontSize = '30px';
    p.style.marginTop = '0px';
	p.style.paddingLeft = '40px';
	p.style.fontFamily = 'Permanent Marker';
    if (CurrMonth == 0) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, 1);
        p.innerHTML = 'January';
        var weeks = 5;
    } else if (CurrMonth == 1) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -2);
        p.innerHTML = 'February';
        var weeks = 5;
    } else if (CurrMonth == 2) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -2);
        p.innerHTML = 'March';
        var weeks = 5;
    } else if (CurrMonth == 3) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -5);
        p.innerHTML = 'April';
        var weeks = 6;
    } else if (CurrMonth == 4) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, 0);
        p.innerHTML = 'May ';
        var weeks = 5;
    } else if (CurrMonth == 5) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -3);
        p.innerHTML = 'June';
        var weeks = 5;
    } else if (CurrMonth == 6) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -5);
        p.innerHTML = 'July';
        var weeks = 6;
    } else if (CurrMonth == 7) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -1);
        p.innerHTML = 'August';
        var weeks = 5;
    } else if (CurrMonth == 8) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -4);
        p.innerHTML = 'September';
        var weeks = 5;
    } else if (CurrMonth == 9) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, 1);
        p.innerHTML = 'October';
        var weeks = 5;
    } else if (CurrMonth == 10) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -2);
        p.innerHTML = 'November';
        var weeks = 5;
    } else if (CurrMonth == 11) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -4);
        p.innerHTML = 'December';
        var weeks = 6;
    }
    for (var j = 0; j < weeks; j++) {
        var tr = document.createElement('tr');
        for (var i = 0; i < 7; i++) {
            var td = document.createElement('td');
            td.style.width = '40px';
			td.style.paddingLeft = '20px';
            td.innerHTML = FirstTableDay.getDate();
            FirstTableDay.setDate(FirstTableDay.getDate() + 1);
            if (td.innerHTML != CurrDay) {
                td.style.color = '#000000';
            } else {
                td.style.color = '#FFFFFF';
                td.style.backgroundColor = '#A52A2A';
				td.style.borderRadius = '5px';
            }
				if (td.innerHTML <= CurrDay) {
                td.style.color = '#1E90FF';
            }
			var FirstMonthDay = new Date(CurrYear, CurrMonth, );
			var LastMonthDay = new Date(CurrYear, CurrMonth, );
			/*var CurrDate = new Date();
               var CurrDay = CurrDate.getDate();
               var CurrMonth = CurrDate.getMonth();
               var CurrYear = CurrDate.getFullYear();*/
			
			
			
			
			
			
            tr.appendChild(td);
            tr.style.backgroundColor = '#FFF0F5';
			td.style.borderRadius = '5px';
        }
        CalendarPage.appendChild(tr);
    }
	 var p2 = document.createElement('p');
    CalendarPage.appendChild(p2);
    p2.innerHTML = '2018';
	p2.style.marginTop = '0px';
}
table(CurrMonth);
function previousMonth() {
	if(CurrMonth >0){
    CalendarPage.innerHTML = '';
    CurrMonth = CurrMonth - 1;
    table(CurrMonth);
	}
	else {
		CalendarPage.innerHTML = '';
		CurrMonth = 12;
    	CurrMonth = CurrMonth - 1;
    	table(CurrMonth);
	}
}
function nextMonth() {
	if(CurrMonth <11){
    CalendarPage.innerHTML = '';
    CurrMonth = CurrMonth + 1;
    table(CurrMonth);
	}
	else {
		CalendarPage.innerHTML = '';
		CurrMonth = -1; 
    	CurrMonth = CurrMonth + 1;
    	table(CurrMonth);
	}
}
document.getElementById('Prev').onclick = previousMonth;
document.getElementById('Nex').onclick = nextMonth;