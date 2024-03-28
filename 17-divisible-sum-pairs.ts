/*
    Given an array of integers and a positive integer `k`, determine the number of `(i, j)` pairs where `i < j` and `ar[i]` + `ar[j]` is divisible by `k`.

    Example
    `ar = [1, 2, 3, 4, 5, 6]`
    `k = 5`

    Three pairs meet the criteria: `[1, 4], [2, 3]` and `[4, 6]`.
*/

; (() => {
    function divisibleSumPairs(n: number, k: number, ar: number[]): number {
        let result: number = 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if ((ar[i] + ar[j]) % k === 0 && i < j) {
                    result++
                }
            }
        }
        return result
    }

    const n: number = 6
    const k: number = 3
    const ar: number[] = [1, 3, 2, 6, 1, 2]

    const result: number = divisibleSumPairs(n, k, ar);
    console.log(result);
})()
