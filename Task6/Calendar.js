var CurrDate = new Date();
var CurrDay = CurrDate.getDate();
var CurrMonth = CurrDate.getMonth();
var CurrYear = CurrDate.getFullYear();
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
        var div = document.createElement('div');
        for (var i = 0; i < 7; i++) {
            var input = document.createElement('input');
            input.type = 'button';
            input.style.width = '58px';
            input.style.paddingLeft = '20px';
            input.style.height = '43px';
            input.style.margin = '2px';
            input.value = FirstTableDay.getDate();
            FirstTableDay.setDate(FirstTableDay.getDate() + 1);
            if (input.value != CurrDay) {
                input.style.color = '#000000';
            } else {
                input.style.color = '#FFFFFF';
                input.style.backgroundColor = '#16ACE3';
                input.style.borderRadius = '5px';
            }
            div.appendChild(input);
            switch (j) {
                case 0:
                    if (input.value > 20) {
						input.style.color = '#B5D0D9';
                        input.style.backgroundColor = '#F5F5F5';
                    } else break;
                case 4:
                    if (input.value < 20) {
						input.style.color = '#B5D0D9';
                        input.style.backgroundColor = '#F5F5F5';
                    }
                case 5:
                    if (input.value < 20) {
						input.style.color = '#B5D0D9';
                        input.style.backgroundColor = '#F5F5F5';
                        break;
                    }
            }
            div.style.backgroundColor = '#FFFFFF';
            input.style.borderRadius = '5px';
            input.style.border = 'none';
            input.style.outline = 'none';
            input.style.fontSize = '20px';
            input.style.paddingLeft = '9px';
            input.style.fontWeight = '600';
            input.style.fontFamily = 'Suranna';
        }
        CalendarPage.appendChild(div);
    }
}

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
DrawCalendar(CurrMonth);