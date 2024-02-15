;(() => {
	function diagonalDifference(arr: number[][]): number {
		let mainDiagonal = 0
		let secondaryDiagonal = 0

		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length; j++) {
				if (i === j) {
					mainDiagonal += arr[i][j]
				}
				if (i + j === arr.length - 1) {
					secondaryDiagonal += arr[i][j]
				}
			}
		}
		return Math.abs(mainDiagonal - secondaryDiagonal)
	}

	let arr: number[][] = [
		[-1, 1, -7, -8],
		[-10, -8, -5, -2],
		[0, 9, 7, -1],
		[4, 4, -2, 1],
	]

	const result: number = diagonalDifference(arr)
	console.log(result)
})()
