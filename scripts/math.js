export function reverse(arr) {
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res;
}