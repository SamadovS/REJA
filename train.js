// //          *** Task E ***:
// // Shunday function tuzing, u bitta string argumentni qabul qilib osh stringni teskari qilib return qilsin
// // masalan: getReverse("hello") return qilsin "olleh"

// function getReverse(a) {
//     let getReverse = a
//         .split(" ")
//         .map((word) => word.split("").reverse().join(""));
//     return getReverse.join("");
// }
// const result1 = getReverse("hello");
// console.log(result1);

// const result2 = getReverse("apple");
// console.log(result2);

// ==========================================================================================================================

//                   ***** ***** ***** *****      Challenge: Cezar       ***** *****  ***** *****

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
// let code = 2;

// function decodeMessage(message, secret) {}

// const message = "hello";
// const secret_message = decodeMessage(message, code);
// console.log("Secret => ", secret_message);

// setTimeout(() => {
//     code *= -1;
//     const message_encoded = decodeMessage(secret_message, code);
//     console.log("Original => ", message_encoded);
// }, 5000);

const alphabet = "abcdefghijklmnopqrstuvwxyz";
let alpha = alphabet.split("");
// console.log(alpha);
// console.log(alpha[1]);
const message = "hello";
let mes = message.split("");

console.log(alpha.indexOf(mes[0]));
// console.log(ans);
