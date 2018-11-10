document.body.style.fontFamily = 'Poiret One';
document.body.style.fontWeight = '600';
var next = document.createElement('button');
var previous = document.createElement('button');
document.body.appendChild(previous);
document.body.appendChild(next);
previous.id = 'Prev';
next.id = 'Nex';
next.style.height = '20px';
next.style.marginLeft = '180px';
next.innerHTML = '>';
next.style.border = 'none';
next.style.background = 'none';
next.style.outline = 'none';
previous.style.height = '20px';
previous.innerHTML = '<';
previous.style.border = 'none';
previous.style.background = 'none';
previous.style.outline = 'none';
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
//Monday.innerHTML = 'Mon';
//Tuesday.innerHTML = 'Tue';
//Wednesday.innerHTML = 'Wed';
//Thursday.innerHTML = 'Thu';
//Friday.innerHTML = 'Fri';
//Saturday.innerHTML = 'Sat';
//Sunday.innerHTML = 'Sun';

CalendarPage.appendChild(Days);
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
function table(TodayMonth) {
    var p = document.createElement('p');
    CalendarPage.appendChild(p);
    p.innerHTML = CurrMonth;
    p.style.textTransform = 'uppercase';
    p.style.width = '10px';
    p.style.fontSize = '30px';
    p.style.marginBottom = '0px';
    p.style.marginTop = '0px';
    if (CurrMonth == 0) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, 1);
        p.innerHTML = 'Январь';
        var weeks = 5;
    } else if (CurrMonth == 1) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -2);
        p.innerHTML = 'Февраль';
        var weeks = 5;
    } else if (CurrMonth == 2) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -2);
        p.innerHTML = 'Март';
        var weeks = 5;
    } else if (CurrMonth == 3) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -5);
        p.innerHTML = 'Апрель';
        var weeks = 6;
    } else if (CurrMonth == 4) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, 0);
        p.innerHTML = 'Май';
        var weeks = 5;
    } else if (CurrMonth == 5) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -3);
        p.innerHTML = 'Июнь';
        var weeks = 5;
    } else if (CurrMonth == 6) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -5);
        p.innerHTML = 'Июль';
        var weeks = 6;
    } else if (CurrMonth == 7) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -1);
        p.innerHTML = 'Август';
        var weeks = 5;
    } else if (CurrMonth == 8) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -4);
        p.innerHTML = 'Сентябрь';
        var weeks = 5;
    } else if (CurrMonth == 9) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, 1);
        p.innerHTML = 'Октябрь';
        var weeks = 5;
    } else if (CurrMonth == 10) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -2);
        p.innerHTML = 'Ноябрь';
        var weeks = 5;
    } else if (CurrMonth == 11) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -4);
        p.innerHTML = 'Декабрь';
        var weeks = 6;
    }
    for (var j = 0; j < weeks; j++) {
        var tr = document.createElement('tr');
        for (var i = 0; i < 7; i++) {
            var td = document.createElement('td');
            td.style.width = '30px';
            td.innerHTML = FirstTableDay.getDate();
            FirstTableDay.setDate(FirstTableDay.getDate() + 1);
            if (td.innerHTML != CurrDay) {
                td.style.color = '#000000';
            } else {
                td.style.color = '#FFFFFF';
                td.style.backgroundColor = '#EE2C2C';
            }
            tr.appendChild(td);
            tr.style.backgroundColor = '#ADD8E6';
        }
        CalendarPage.appendChild(tr);
    }
}
table(CurrMonth);

function previousMonth() {
    CalendarPage.innerHTML = '';
    CurrMonth = CurrMonth - 1;
    table(CurrMonth);
}

function nextMonth() {
    CalendarPage.innerHTML = '';
    CurrMonth = CurrMonth + 1;
    table(CurrMonth);
}
document.getElementById('Prev').onclick = previousMonth;
document.getElementById('Nex').onclick = nextMonth;