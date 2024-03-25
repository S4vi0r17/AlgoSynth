/*
    Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

    Lily decides to share a contiguous segment of the bar selected such that:

        - The length of the segment matches Ron's birth month, and,
        - The sum of the integers on the squares is equal to his birth day.

    Determine how many ways she can divide the chocolate.

    Example
    `s = [2, 2, 1, 3, 2]`
    `d = 4`
    `m = 2`

    Lily wants to find segments summing to Ron's birth day, `d = 4` with a length equalling his birth month, `m = 2`. In this case, there are two segments meeting her criteria: [2, 2] and [1, 3].
*/

; (() => {
    function birthday(s: number[], d: number, m: number): number {

        let result: number = 0
        let sum: number = 0

        for (let i = 0; i < s.length; i++) {
            console.log('--', s[i]);
            sum = s[i]
            for (let j = i + 1; j < i + m; j++) {
                if (j >= s.length) {
                    // console.log(s[s.length % j]);
                    // sum += s[s.length % j]
                } else {
                    console.log(s[j]);
                    sum += s[j]
                }
            }
            if (sum === d) {
                result++
            }
            sum = 0
        }

        return result
    }

    // const s: number[] = [2, 2, 1, 3, 2]
    // const d: number = 4
    // const m: number = 2
    const s: number[] = [1, 2, 1, 3, 2]
    const d: number = 3
    const m: number = 2
    const result: number = birthday(s, d, m);
    console.log(result);

})()
