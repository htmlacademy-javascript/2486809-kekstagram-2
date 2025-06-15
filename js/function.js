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


