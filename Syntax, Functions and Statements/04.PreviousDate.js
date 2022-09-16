function previousDay(year, mounth, day){
    let currentDate = new Date(year, mounth-1, day-1);
   
    console.log(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`)
}

previousDay(2016, 9, 30)
previousDay(2016, 10, 1)