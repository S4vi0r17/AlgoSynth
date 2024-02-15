/*
    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    Example

    `arr = [1, 3, 5, 7, 9]`

    The minimum sum is `1 + 3 + 5 + 7 = 16` and the maximum sum is `3 + 5 + 7 + 9 = 24`. The function prints

    16 24
*/

;(() => {
	function miniMaxSum(arr: number[]): void {
		let mini: number = 0
		let max: number = 0
		arr.sort()
		for (let i = 0; i < arr.length; i++) {
			if (i < arr.length - 1) {
				mini += arr[i]
			}
			if (i > 0) {
				max += arr[i]
			}
		}
		console.log(`${mini} ${max}`)
	}

	const arr: number[] = [7, 69, 2, 221, 8974]
	miniMaxSum(arr)
})()
