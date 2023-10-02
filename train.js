//                     ***** ***** *****   Task F   ***** ***** *****
// findDoublers function tuzing, unga faqat bitta string argument pass bolib,
// agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// masalan: getReverse("hello") return true return qiladi

const findDoublers = (word) => {
    return word
        .split("")
        .map((ele, i, list) => list.includes(ele, i + 1))
        .includes(true);
};
console.log(findDoublers("hello"));
console.log(findDoublers("flower"));
console.log(findDoublers("apple"));
