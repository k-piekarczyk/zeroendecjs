"use strict";

// Array chunkify

function chunkify(a, n, balanced) {
  if (n < 2) return [a];

  var len = a.length,
      out = [],
      i = 0,
      size;

  if (len % n === 0) {
    size = Math.floor(len / n);
    while (i < len) {
      out.push(a.slice(i, i += size));
    }
  } else if (balanced) {
    while (i < len) {
      size = Math.ceil((len - i) / n--);
      out.push(a.slice(i, i += size));
    }
  } else {
    n--;
    size = Math.floor(len / n);
    if (len % size === 0) size--;
    while (i < size * n) {
      out.push(a.slice(i, i += size));
    }
    out.push(a.slice(size * n));
  }
  return out;
}

const zeroPad = num => "00000000".slice(String(num).length) + num;

const stringToBinary = text => text.split("").map(char => zeroPad(char.charCodeAt(0).toString(2))).join(" ");

const binaryToString = binary => binary.split(" ").map(el => String.fromCharCode(parseInt(el, 2))).join("");

const binaryToZeroWidth = binary => binary.split("").map(binaryNum => {
  const num = parseInt(binaryNum, 10);
  if (num === 1) {
    return "​";
  } else if (num === 0) {
    return "‌";
  }
  return "‍";
}).join("");

const zeroWidthToBinary = string => string.split("").map(char => {
  if (char === "​") {
    return "1";
  } else if (char === "‌") {
    return "0";
  } else if (char === "‍") {
    return " ";
  }
  return "";
}).join("");

const stringToZeroWidth = string => binaryToZeroWidth(stringToBinary(string));

const zeroWidthToString = zeroWidth => binaryToString(zeroWidthToBinary(zeroWidth));

const fingerprintText = (text, secret) => {
  let textArr = text.split("");
  let encsec = stringToZeroWidth(secret);

  let result = "";

  let numOfSpaces = textArr.reduce((pre, cur) => {
    if (cur === " ") return ++pre;else return pre;
  }, 0);

  let textNoSpace = text.split(" ");

  if (numOfSpaces > encsec.length) {
    for (let i = 0; i < encsec.length; i++) {
      result += textNoSpace[0] + encsec.charAt(i) + " ";
      textNoSpace.splice(0, 1);
    }
    result += textNoSpace.join(" ");
  } else {
    let encsecArr = chunkify(encsec.split(""), numOfSpaces, true).map(el => el.join(""));
    for (let i = 0; i < encsecArr.length; i++) {
      result += textNoSpace[0] + encsecArr[i] + " ";
      textNoSpace.splice(0, 1);
    }
    result += textNoSpace.join(" ");
  }

  return result;
};

console.log("Test:", fingerprintText("Hello My Beautiful World", "krospos"));

module.exports = {
  stringToZeroWidth,
  zeroWidthToString,
  fingerprintText
};