function checkStringLength(string, maxSymbols) {
  return string.length <= maxSymbols;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);


const isPalindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let invertedLine = '';

  for (let i = string.length - 1; i >= 0; i--) {
    invertedLine += string[i];
  }

  return string === invertedLine;
};

isPalindrome('проверяемая строка');


const MINUTES_PER_HOUR = 60;

const getMinutes = (time) => {
  const [h, m] = time.split(':');
  return h * MINUTES_PER_HOUR + +m;
};

const checkMeeting = (startDay, endDay, startMeeting, duringMeeting) => {
  const startDayMinutes = getMinutes(startDay);
  const endDayMinutes = getMinutes(endDay);
  const startMeetingMinutes = getMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + duringMeeting;
  return startDayMinutes <= startMeetingMinutes && endMeetingMinutes <= endDayMinutes;
};

console.log(checkMeeting('08:00', '17:30', '14:00', 90));
console.log(checkMeeting('8:0', '10:0', '8:0', 120));
console.log(checkMeeting('08:00', '14:30', '14:00', 90));
console.log(checkMeeting('14:00', '17:30', '08:0', 90));
console.log(checkMeeting('8:00', '17:30', '08:00', 900));
