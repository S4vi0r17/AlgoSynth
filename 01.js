function solveMeFirst(a, b) {
    if (1 <= a && a <= 1000 && 1 <= b && b <= 1000) {
        return a + b;
    }
    return -1;
}

function main() {
    let a = 2;
    let b = 3;
    let res = solveMeFirst(a, b);
    console.log(res);
}

main();
