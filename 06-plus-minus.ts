;(() => {
	function plusMinus(arr: number[]): void {
		let positive: number = 0,
			negative: number = 0
		arr.forEach((ar) => {
			if (ar > 0) {
				positive++
			} else if (ar < 0) {
				negative++
			}
		})

		const length: number = arr.length
		let ratioP: number = positive / length
		let ratioN: number = negative / length
		let ratioZ: number = 1 - (positive + negative) / length

		console.log(ratioP.toFixed(6))
		console.log(ratioN.toFixed(6))
		console.log(ratioZ.toFixed(6))
	}

	const arr: number[] = [1, 1, 0, -1, -1]
	plusMinus(arr)
})()
