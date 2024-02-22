/*
    Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

    In the diagram below:

    # The red region denotes the house, where `s` is the start point, and `t` is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.

    # Assume the trees are located on a single point, where the apple tree is at point `a`, and the orange tree is at point `b`.
    
    # When a fruit falls from its tree, it lands `d` units of distance from its tree of origin along the `x`-axis. *A negative value of `d` means the fruit fell `d` units to the tree's left, and a positive value of `d` means it falls `d` units to the tree's right. *

    https://s3.amazonaws.com/hr-challenge-images/25220/1474218925-f2a791d52c-Appleandorange2.png

    Given the value of `d` for `m` apples and `n` oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range `[s, t]`)?

    For example, Sam's house is between `s = 7` and `t = 10`. The apple tree is located at `a = 4` and the orange at `b = 12`. There are `m = 3` apples and `n = 3` oranges. Apples are thrown `apples = [2, 3, -4]` units distance from `a`, and `oranges = [3, -2, -4]` units distance. Adding each apple distance to the position of the tree, they land at `[4 + 2, 4 + 3, 4 + -4] = [6, 7, 0]`. Oranges land at `[12 + 3, 12 + -2, 12 + -4] = [15, 10, 8]`. One apple and two oranges land in the inclusive range `7 - 10` so we print

    1
    2
*/

;(() => {
	function countApplesAndOranges(
		s: number,
		t: number,
		a: number,
		b: number,
		apples: number[],
		oranges: number[]
	): void {
		let appleDistance: number[] = []
		let orangesDistance: number[] = []

		let i: number = 0
		while (apples && i < apples.length) {
			appleDistance.push(a + apples[i])
			i++
		}

		let j: number = 0
		while (oranges && j < oranges.length) {
			orangesDistance.push(b + oranges[j])
			j++
		}

		let counterApples: number = 0
		let counterOranges: number = 0

		for (const appleD of appleDistance) {
			if (s <= appleD && appleD <= t) {
				counterApples++
			}
		}

		for (const orangeD of orangesDistance) {
			if (s <= orangeD && orangeD <= t) {
				counterOranges++
			}
		}

		console.log(counterApples)
		console.log(counterOranges)
	}

	const s: number = 7
	const t: number = 10
	const a: number = 4
	const b: number = 12
	const apples: number[] = [2, 3, -4]
	const oranges: number[] = [3, -2, -4]

	countApplesAndOranges(s, t, a, b, apples, oranges)
})()
