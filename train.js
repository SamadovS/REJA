// // SYNCHRONOUS (CALLBACK) FUNCTION
// console.log("<<< SYNCHRONOUS (callback) FUNCTIONS >>>");
// console.log("Jack Ma maslahatlari");
// let l = 44 + 11;
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "o'zingizga ishlashni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yo'q endi", // 60-70
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number")
//         callback("insert a number", null); //1-qismi: error    2-qismi: data
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         callback(null, list[5]);

//         // setTimeout(function () {
//         //     callback(null, list[5]);
//         // }, 5000);

//         // setInterval(function () {
//         //     callback(null, list[5]);
//         // }, 5000);
//     }
// }
// console.log("passed here 0");
// // parametr sifatida function ishga tushadi
// maslahatBering(67, (err, data) => {
//     if (err) console.log("ERROR: ", err);
//     console.log("Javob:", data);
// });
// console.log("passed here 1");
console.log(
    "==================================================================================================================="
);

// ASYNCHRONOUS FUNCTION
console.log("<<< ASYNCHRONOUS FUNCTIONS >>>");
async function maslahatBer(a) {
    if (typeof a !== "number")
        throw new Error("insert a number"); //1-qismi: error    2-qismi: data
    else if (a <= 20) return list[0];
    else if (a > 20 && a <= 30) return list[1];
    else if (a > 30 && a <= 40) return list[2];
    else if (a > 40 && a <= 50) return list[3];
    else if (a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            }, 5000);
        });
    }
}
// sen yuqorida async func ishlatding, log qismida emas
// we use: callback and promise-hill
// call via then/catch
// then()   catch()  ==> *** async yozayotganda paytda buni ishlatishga harakat qil
console.log("passed here 0"); // bu sync function ==> bu 1-bajariladi (bu single threadni o'zida bajariladi)
maslahatBer(25)
    .then((data) => {
        console.log("Javob:", data);
    }) // bu "async" function ==> bu 3-bajariladi (oxiri bajariladi)
    .catch((err) => {
        console.log("Error:", err); // lekin bu WORKERS POOL ga bir tushib chiqadi
    });
console.log("passed here 1"); // bu sync function ==> bu 2-bajariladi (bu ham single threadni o'zida bajariladi)

// log qismida ham async func ishlatish:
// call via async/await ()
async function run() {
    let javob = await maslahatBer(20);
    console.log(javob);
    javob = await maslahatBer(70);
    console.log(javob);
    javob = await maslahatBer(42);
    console.log(javob);
    javob = await maslahatBer(53);
    console.log(javob);
}
run();
