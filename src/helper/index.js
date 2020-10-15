export const calculatePriceChange = (originalValue, currValue) => {
    let res;
    if (0 !== currValue) {
        if (0 !== originalValue) {
            res = (currValue - originalValue) / originalValue * 100;
        } else {
            res = currValue * 100;
        }
    } else {
        res = -originalValue * 100;
    }
    return res.toFixed(2);
}