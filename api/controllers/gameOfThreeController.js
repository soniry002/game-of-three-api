'use strict';

exports.get_next_num = function (req, res) {
    let num = parseInt(req.params.inputNum);
    let finalNum = 0;
    let added = '0';
    if (num / 3 == 1) {
        finalNum = 1;
    }
    else {
        if (num % 3 == 0) {
            finalNum = num / 3;
        } else if (num % 3 != 0) {
            if ((num + 1) % 3 == 0) {
                finalNum = eval(num + 1) / 3;
                added = '1';
            } else if ((num - 1) % 3 == 0) {
                finalNum = eval(num - 1) / 3;
                added = '-1'
            }
        }
    }
    let jsonNum = { 'data': finalNum, 'added': added };
    res.json(jsonNum);
};