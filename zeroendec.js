'use strict';

const zeroPad = num => "00000000".slice(String(num).length) + num;

const stringToBinary = text =>
  text
    .split("")
    .map(char => zeroPad(char.charCodeAt(0).toString(2)))
    .join(" ");

const binaryToString = binary =>
  binary
    .split(" ")
    .map(el => String.fromCharCode(parseInt(el, 2)))
    .join("");

const binaryToZeroWidth = binary =>
  binary
    .split("")
    .map(binaryNum => {
      const num = parseInt(binaryNum, 10);
      if (num === 1) {
        return "​";
      } else if (num === 0) {
        return "‌";
      }
      return "‍";
    })
    .join("");

const zeroWidthToBinary = string =>
  string
    .split("")
    .map(char => {
      if (char === "​") {
        return "1";
      } else if (char === "‌") {
        return "0";
      } else if (char === "‍") {
        return " ";
      }
      return "";
    })
    .join("");

const stringToZeroWidth = string => 
  binaryToZeroWidth(stringToBinary(string));

const zeroWidthToString = zeroWidth =>
  binaryToString(zeroWidthToBinary(zeroWidth));

