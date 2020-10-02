module.exports = function reverse (n) {
    n = String(n);
    n = n.split('').reverse().join('').replace(/\-$/gm, '');
    return +n;
}
