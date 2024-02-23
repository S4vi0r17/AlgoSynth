/*
    You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

        # The first kangaroo starts at location `x1` and moves at a rate of `v1` meters per jump.
        # The second kangaroo starts at location `x2` and moves at a rate of `v2` meters per jump.
    You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return `YES`, otherwise return `NO`.

    Example:

    x1 = 2
    v1 = 1
    x2 = 1
    v2 = 2

    After one jump, they are both at `x = 3`, (x1 + v1 = 2 + 1, x2 + v2 = 1 + 2), so the answer is `YES`.
*/

;(() => {
	function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
		let distance1: number = x1 + v1 // 0
		let distance2: number = x2 + v2 // 4

		if ((x1 < x2 && v1 <= v2) || (x1 > x2 && v1 >= v2)) {
			return 'NO'
		}

		if (x1 < x2) {
			while (distance1 < distance2) {
				distance1 += v1 // 3 6 9 12
				distance2 += v2 // 6 8 10 12
			}
		} else {
			while (distance2 < distance1) {
				distance1 += v1
				distance2 += v2
			}
		}

		if (distance1 === distance2) {
			return 'YES'
		} else {
			return 'NO'
		}
	}

	let x1: number = 0 // 0 3 6 9 12
	let v1: number = 3
	let x2: number = 4 // 4 6 8 10 12
	let v2: number = 2

	const result: string = kangaroo(x1, v1, x2, v2)
	console.log(result)
})()
