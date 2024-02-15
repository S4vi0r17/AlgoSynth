/*
    You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

    Example

    candles = [4, 4, 1, 3]

    The maximum height candles are `4` units high. There are `2` of them, so return `2`.
*/

;(() => {
	function birthdayCakeCandles(candles: number[]): number {
		// console.log(...candles);
		const max = Math.max(...candles)
		let counter: number = 0
		candles.forEach((candle) => {
			if (candle === max) {
				counter++
			}
		})
		return counter
	}

	const candles: number[] = [4, 4, 1, 3]
	const result: number = birthdayCakeCandles(candles)
	console.log(result)
})()
