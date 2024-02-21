/*
    HackerLand University has the following grading policy:

        # Every student receives a `grade` in the inclusive range from `0` to `100`.
        # Any `grade` less than `40` is a failing grade.

    Sam is a professor at the university and likes to round each student's  according to these rules:

        # If the difference between the `grade` and the next multiple of `5` is less than `3`, round `grade` up to the next multiple of `5`.
        # If the value of `grade` is less than `38`, no rounding occurs as the result will still be a failing grade.

    Examples

        `grade` = `84` round to  (85 - 84 is less than 3)
        `grade` = `29` do not round (result is less than 40)
        `grade` = `57` do not round (60 - 57 is 3 or higher)

    Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
*/

;(() => {
	function gradingStudents(grades: number[]): number[] {
		let array: number[] = []

		for (let i = 0; i < grades.length; i++) {
			let next: number = grades[i] + 5 - (grades[i] % 5)
            
			if (grades[i] < 38) {
				array[i] = grades[i]
			} else if (next - grades[i] < 3) {
				array[i] = next
			} else {
				array[i] = grades[i]
			}
		}

		return array
	}

	const grades: number[] = [73, 67, 38, 33]
	const result: number[] = gradingStudents(grades)

	console.log(result)
})()
