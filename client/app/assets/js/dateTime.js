// function dateModify(time){
  //   var today = new Date();
  //   var day = "";
  //   var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  //   var indexInDays = time.getDay() - 1;
  //   var dayString = days[indexInDays];
  //   var suffix = ['st', 'nd', 'rd', 'th'];
  //   var getSuffix = suffix[indexInDays-1];
  //   var timePosted = "";
  //   var mins = "";
  //   var hours = 0;

  //   if (time.getMinutes() === 00) {
  //     mins = "";
  //   }
  //   else {
  //     mins = time.getMinutes;
  //   }

  //   if (today.getDate() == time.getDate()) {
  //     day = 'Today';
  //   }
  //   else if (time.getDate() - today.getDate() === 1) {
  //     day = 'Yesterday';
  //   }
  //   else if (today.getDate() - time.getDate() >= 7 && today.getDate() - time.getDate() < 14) {
  //     day = 'Last ' + dayString;
  //   }
  //   else {
  //     day = dayString + ' the ' + time.getDate() + '' + getSuffix;
  //   }

  //   if (time.getHours() <= 12) {
  //     timePosted = time.getHours() + ':' + time.getMinutes() + 'am';
  //   }
  //   else {
  //     switch (time.getHours()) {
  //       case 13:
  //         hours = "1pm" + mins;
  //         break;
  //       case 14:
  //         hours = "2pm" + mins;
  //         break;
  //       case 15:
  //         hours = "3pm" + mins;
  //         break;
  //       case 16:
  //         hours = "4pm" + mins;
  //         break;
  //       case 17:
  //         hours = "5pm" + mins;
  //         break;
  //       case 18:
  //         hours = "6pm" + mins;
  //         break;
  //       case 19:
  //         hours = "7pm" + mins;
  //         break;
  //       case 20:
  //         hours = "8pm" + mins;
  //         break;
  //       case 21:
  //         hours = "9pm" + mins;
  //         break;
  //       case 22:
  //         hours = "10pm" + mins;
  //         break;
  //       case 23:
  //         hours = "11pm" + mins;
  //         break;
  //       case 24:
  //         hours = "12pm" + mins;
  //         break;
  //     }
  //     timePosted = " at " + hours + mins;
  //   }
  //   return day + timePosted;
  // }
