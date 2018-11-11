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
content.className = "content";
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

function DaysNames() {
    var NamesWrapper = document.createElement('div');
    content.appendChild(NamesWrapper);
    NamesWrapper.style.display = 'flex';
    NamesWrapper.style.maxHeight = '30px';
    NamesWrapper.style.position = 'absolute';
    NamesWrapper.style.marginTop = '10px';
    NamesWrapper.style.fontSize = '25px';
    var mon = document.createElement('p');
    NamesWrapper.appendChild(mon);
    mon.innerHTML = "Mon";
    mon.style.marginLeft = '10px';
    mon.style.marginRight = '20px';
    var tue = document.createElement('p');
    NamesWrapper.appendChild(tue);
    tue.innerHTML = "Tue ";
    tue.style.marginRight = '22px';
    var wed = document.createElement('p');
    NamesWrapper.appendChild(wed);
    wed.innerHTML = "Wed ";
    wed.style.marginRight = '20px';
    var thu = document.createElement('p');
    NamesWrapper.appendChild(thu);
    thu.innerHTML = "Thu ";
    thu.style.marginRight = '30px';
    var fri = document.createElement('p');
    NamesWrapper.appendChild(fri);
    fri.innerHTML = "Fri ";
    fri.style.marginRight = '35px';
    var sat = document.createElement('p');
    NamesWrapper.appendChild(sat);
    sat.innerHTML = "Sat ";
    sat.style.marginRight = '30px';
    var sun = document.createElement('p');
    NamesWrapper.appendChild(sun);
    sun.innerHTML = "Sun ";
    sun.style.color = '#A52A2A';
}
DaysNames();

function DrawCalendar(TodayMonth) {
    var MonthHeadline = document.createElement('p');
    CalendarPage.appendChild(MonthHeadline);
    MonthHeadline.innerHTML = CurrMonth;
    MonthHeadline.style.width = '10px';
    MonthHeadline.style.fontSize = '30px';
    MonthHeadline.style.marginTop = '0px';
    MonthHeadline.style.paddingLeft = '40px';
    MonthHeadline.style.fontFamily = 'Permanent Marker';
    if (CurrMonth == 0) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, 1);
        MonthHeadline.innerHTML = 'January';
        var weeks = 5;
    } else if (CurrMonth == 1) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -2);
        MonthHeadline.innerHTML = 'February';
        var weeks = 5;
    } else if (CurrMonth == 2) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -2);
        MonthHeadline.innerHTML = 'March';
        var weeks = 5;
    } else if (CurrMonth == 3) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -5);
        MonthHeadline.innerHTML = 'April';
        var weeks = 6;
    } else if (CurrMonth == 4) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, 0);
        MonthHeadline.innerHTML = 'May ';
        var weeks = 5;
    } else if (CurrMonth == 5) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -3);
        MonthHeadline.innerHTML = 'June';
        var weeks = 5;
    } else if (CurrMonth == 6) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -5);
        MonthHeadline.innerHTML = 'July';
        var weeks = 6;
    } else if (CurrMonth == 7) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -1);
        MonthHeadline.innerHTML = 'August';
        var weeks = 5;
    } else if (CurrMonth == 8) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -4);
        MonthHeadline.innerHTML = 'September';
        var weeks = 5;
    } else if (CurrMonth == 9) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, 1);
        MonthHeadline.innerHTML = 'October';
        var weeks = 5;
    } else if (CurrMonth == 10) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -2);
        MonthHeadline.innerHTML = 'November';
        var weeks = 5;
    } else if (CurrMonth == 11) {
        var FirstTableDay = new Date(CurrYear, CurrMonth, -4);
        MonthHeadline.innerHTML = 'December';
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
            tr.appendChild(td);
            tr.style.backgroundColor = '#DCDCDC';
            td.style.borderRadius = '5px';
        }
        CalendarPage.appendChild(tr);
    }
}
DrawCalendar(CurrMonth);

function previousMonth() {
    if (CurrMonth > 0) {
        CalendarPage.innerHTML = '';
        CurrMonth = CurrMonth - 1;
        DrawCalendar(CurrMonth);
    } else {
        CalendarPage.innerHTML = '';
        CurrMonth = 12;
        CurrMonth = CurrMonth - 1;
        DrawCalendar(CurrMonth);
    }
}

function nextMonth() {
    if (CurrMonth < 11) {
        CalendarPage.innerHTML = '';
        CurrMonth = CurrMonth + 1;
        DrawCalendar(CurrMonth);
    } else {
        CalendarPage.innerHTML = '';
        CurrMonth = -1;
        CurrMonth = CurrMonth + 1;
        DrawCalendar(CurrMonth);
    }
}
document.getElementById('Prev').onclick = previousMonth;
document.getElementById('Nex').onclick = nextMonth;