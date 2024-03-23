/*
    There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

        1. The elements of the first array are all factors of the integer being considered
        2. The integer being considered is a factor of all elements of the second array

    These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

    Example
    a = [2, 6]
    b = [24, 36]

    There are two numbers between the arrays: 6 and 12.
    6%2 = 0, 6%6 = 0, 24%6 = 0 and 36%6 = 0 for the first value.
    12%2 = 0, 12%6 = 0 and 24%12 = 0, 36%12 = 0 for the second value. Return 2.
*/

; (() => {
    // function getTotalX(a: number[], b: number[]): number {

    //     let result: number = 0

    //     let a_min: number = Math.min(...a)
    //     let b_max: number = Math.max(...b)

    //     for (let i = a_min; i <= b_max; i++) {
    //         let flag: boolean = true
    //         for (let j = 0; j < a.length; j++) {
    //             if (!(i % a[j] === 0)) {
    //                 flag = false
    //             }
    //         }
    //         for (let j = 0; j < b.length; j++) {
    //             if (!(b[j] % i === 0)) {
    //                 flag = false
    //             }
    //         }
    //         if (flag) {
    //             result++
    //         }
    //     }

    //     return result
    // }

    function getTotalX(a: number[], b: number[]): number {

        let result: number = 0

        let a_min: number = Math.min(...a)
        let b_max: number = Math.max(...b)

        for (let i = a_min; i <= b_max; i++) {

            if ((a.every(n => i % n === 0)) && b.every((n) => n % i === 0)) {
                result++
            }
        }

        return result
    }

    const arr: number[] = [2, 3, 6]
    const brr: number[] = [42, 84]

    const total = getTotalX(arr, brr);
    console.log(total);
})()
