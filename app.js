function age() {
    let day = document.querySelector('#date').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;

    let date = new Date();
    let day2 = date.getDate();
    let month2 = 1 + date.getMonth();
    let year2 = date.getFullYear();
    let month3 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


    if (day > day2) {
        day2 = day2 + month3[month2 - 1];
        month2 = month2 -1;
  
    }else if (month > month2){
        month2 = month2 + 12;
        year2 = year2 - 1;
    }
    let d = day2 - day;
    let m = month2 - month;
    let y = year2 - year;


    document.getElementById('age').innerHTML = 'Your age is ' + y + 'years ' + m + 'months ' + d + "days";
}