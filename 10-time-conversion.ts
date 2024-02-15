/*
    Given a time in `12`-hour AM/PM format, convert it to military (24-hour) time.

    Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
    - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

    Example

    s = `12:01:00PM`
    Return '12:01:00'.

    s = `12:01:00AM`
    Return '00:01:00'.

    resource: https://www.ciese.org/curriculum/musicalplates3/es/popup/24
*/

;(() => {
	function timeConversion(s: string): string {
		let format: string = s.substring(8)
		let hour: string = s.substring(0, 2)
		let hourN: number = parseInt(hour)
		let result: string = ''
		// if (format === 'AM') {
		// 	if (hourN < 12) {
		// 		result = `${hour}${s.substring(2, s.length - 2)}`
		// 	} else if ((hourN = 12)) {
		// 		hour = (12 - hourN).toString().padStart(2, '0')
		// 		result = `${hour}${s.substring(2, s.length - 2)}`
		// 	}
		// } else {
		// 	if (hourN < 12) {
		// 		hour = (12 + hourN).toString().padStart(2, '0')
		// 		result = `${hour}${s.substring(2, s.length - 2)}`
		// 	} else if ((hourN = 12)) {
		// 		result = `${hour}${s.substring(2, s.length - 2)}`
		// 	}
		// }

		if (format === 'AM') {
			if (hourN === 12) {
				hour = (12 - hourN).toString().padStart(2, '0')
			}
			result = `${hour}${s.substring(2, s.length - 2)}`
		} else {
			if (hourN < 12) {
				hour = (12 + hourN).toString().padStart(2, '0')
			}
			result = `${hour}${s.substring(2, s.length - 2)}`
		}

		return result
	}

	// const s: string = '11:01:00AM'
	const s: string = '02:05:45PM'
	const result: string = timeConversion(s)

	console.log(result)
})()
