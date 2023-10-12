// I-Task: Shunday function tuzing,
// u bir array argument qilib qabul qilib, osha arrayning 0 index qiymatni arrayning oxiriga qoyib return qilsin
// masalan: getCompute(['h', 'e', 'l', 'l', 'o']) return qilishi kerak ['e', 'l', 'l', 'o', 'h']

function getCompute(a) {
    letter = a.shift();
    console.log(letter);
    result = a.concat(letter);
    console.log(result);
}
getCompute(["h", "e", "l", "l", "o"]);
