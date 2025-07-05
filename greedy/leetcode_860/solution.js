/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fiveDollars = 0;
    let tenDollars = 0;

    for (const bill of bills ) {
        switch (bill) {
            case 5:
                fiveDollars ++;

                break;
            case 10:
                fiveDollars --;
                tenDollars ++;

                if(fiveDollars < 0) {
                    return false;
                }

                break;
            case 20:
                if (fiveDollars > 0 && tenDollars > 0) {
                    fiveDollars --;
                    tenDollars --;
                } else if(fiveDollars >= 3) {
                    fiveDollars -= 3;
                } else {
                    return false;
                }

                break;
        }
    }

    return true;
};