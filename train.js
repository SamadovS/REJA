// Task D:     Shunday class tuzing tuzing
// nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin,
// biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud!
// shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

const moment = require("moment");
class Shop {
    constructor(num1, num2, num3) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.pro1 = "apple";
        this.pro2 = "orange";
        this.pro3 = "banana";
    }

    //savat
    haveIt() {
        console.log(`The time is ${moment().format("HH:mm")}. You have ${
            this.num1
        } ${this.pro1}s,
        ${this.num2} ${this.pro2}s and ${this.num3} ${
            this.pro3
        }s in your basket.`);
        console.log(
            "===================================================================="
        );
    }

    //zakaz
    buyIt(pro, num) {
        switch (pro) {
            case this.pro1:
                console.log(`You have bought ${num} ${this.pro1}s.`);
                this.num1 += num;

                break;
            case this.pro2:
                console.log(`You have bought ${num} ${this.pro2}s.`);
                this.num2 += num;
                break;
            case this.pro3:
                console.log(`You have bought ${num} ${this.pro3}s.`);
                this.num3 += num;
                break;
        }
        console.log(
            `The time is ${moment().format("HH:mm")}. Now there are ${
                this.num1
            } ${this.pro1}s, ${this.num2} ${this.pro2}s and ${this.num3} ${
                this.pro3
            }s in your basket !`
        );
    }

    //sotuv
    sellIt(pro, num) {
        switch (pro) {
            case this.pro1:
                console.log(`You have sold ${num} ${this.pro1}s.`);
                this.num1 -= num;

                break;
            case this.pro2:
                console.log(`You have sold ${num} ${this.pro2}s.`);
                this.num2 -= num;
                break;
            case this.pro3:
                console.log(`You have sold ${num} ${this.pro3}s.`);
                this.num3 -= num;
                break;
        }
        console.log(
            `The time is ${moment().format("HH:mm")}. Now there are ${
                this.num1
            } ${this.pro1}s, ${this.num2} ${this.pro2}s and ${this.num3} ${
                this.pro3
            }s in your basket !`
        );
    }
}

const shop1 = new Shop(3, 4, 5);
shop1.haveIt();

shop1.buyIt("orange", 4);
shop1.sellIt("banana", 3);
