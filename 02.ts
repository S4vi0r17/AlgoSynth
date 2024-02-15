;(() => {
	function simpleArraySum(ar: number[]) {
		let total = 0
		ar.forEach((x) => (total += x))
		return total
	}

	let ar: number[] = [1, 2, 3, 4, 10, 11]
	const result = simpleArraySum(ar)
	console.log(result)
})()
