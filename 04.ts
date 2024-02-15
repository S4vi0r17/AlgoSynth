;(() => {
	function aVeryBigSum(ar: number[]): number {
		let total = 0
		ar.forEach((x) => (total += x))
		return total
	}

	let ar: number[] = [
		1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
	]
	const result = aVeryBigSum(ar)
	console.log(result)
})()
