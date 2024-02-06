function compareTriplets(a, b) {
    (a[3] = 0), (b[3] = 0);
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            a[3] += 1;
        }
        if (a[i] < b[i]) {
            b[3] += 1;
        }
    }
    return [a[3], b[3]];
}

function main() {
    a = [5, 6, 7];
    b = [3, 6, 10];
    const result = compareTriplets(a, b);
    console.log(result);
}

main();
