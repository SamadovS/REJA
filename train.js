//          *** Task E ***:
// Shunday function tuzing, u bitta string argumentni qabul qilib osh stringni teskari qilib return qilsin
// masalan: getReverse("hello") return qilsin "olleh"

function getReverse(a) {
    let getReverse = a
        .split(" ")
        .map((word) => word.split("").reverse().join(""));
    return getReverse.join("");
}
const result1 = getReverse("hello");
console.log(result1);

const result2 = getReverse("apple");
console.log(result2);
