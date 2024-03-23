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
    function getTotalX(a: number[], b: number[]) {

        let factorsa: number[] = []
        let possibleA: number[] = []
        let result: number = 0

        for (let i = 0; i < a.length; i++) {
            for (let j = 1; j <= a[i]; j++) {
                if (a[i] % j === 0) {
                    if (!factorsa.includes(j)) {
                        factorsa.push(j)
                    }
                }
            }
        }

        for (let i = 0; i < factorsa.length; i++) {
            for (let j = 0; j < factorsa.length; j++) {
                if (!possibleA.includes(factorsa[i] * factorsa[j])) {
                    possibleA.push(factorsa[i] * factorsa[j])
                }
            }
        }

        let temp: number[] = [...possibleA]
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp.length; j++) {
                if (!possibleA.includes(temp[i] * temp[j])) {
                    possibleA.push(temp[i] * temp[j])
                }
            }
        }
        console.log(possibleA);
        for (let i = 0; i < possibleA.length; i++) {
            let flag: boolean = true
            for (let j = 0; j < a.length; j++) {
                if (!(possibleA[i] % a[j] === 0)) {
                    flag = false
                }
            }
            for (let j = 0; j < b.length; j++) {
                if (!(b[j] % possibleA[i] === 0)) {
                    flag = false
                }
            }

            if (flag === true && Math.max(...a) <= possibleA[i]) {
                result++
                console.log(possibleA[i]);
            }
        }
        return result
    }

    const arr: number[] = [2, 3, 6] // 
    const brr: number[] = [42, 84]

    const total = getTotalX(arr, brr);
    console.log(total);
})()
