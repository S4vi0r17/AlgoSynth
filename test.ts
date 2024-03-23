function multiplyFactors(arr: number[], n: number): number[] {
    let result: number[] = [];
    for (let i = 0; i <= arr.length - n; i++) {
        let product = 1;
        for (let j = 0; j < n; j++) {
            product *= arr[i + j];
        }
        result.push(product);
    }
    return result;
}

const a: number[] = [1,2,3,4]
const n: number = 4

console.log(multiplyFactors(a, n));