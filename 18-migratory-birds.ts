/*
    Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

    Example

    `arr = [1, 1, 2, 2, 3]`

    There are two each of types `1` and `2`, and one sighting of type `3`. Pick the lower of the two types seen twice: type `1`. 
*/

; (() => {
    // function migratoryBirds(arr: number[]): number {
    //     let result: number[] = []
    //     const set = [...new Set(arr)]
    //     let map = new Map<number, number>();

    //     console.log(map);

    //     set.forEach((element) => {
    //         map.set(element, 0);
    //     });

    //     arr.forEach((ar) => {
    //         let count = map.get(ar)
    //         map.set(ar, count! + 1)
    //     });

    //     let firstEntry = Array.from(map.entries())[0];
    //     let maxValue = firstEntry[1];

    //     map.forEach((value, key) => {
    //         if (value >= maxValue) {
    //             maxValue = value
    //         }
    //     });

    //     // console.log(map.entries());
    //     // console.log(map.keys());

    //     for (const [key, value] of map.entries()) {
    //         // console.log(`Key: ${key}, Value: ${value}`);
    //         if (value === maxValue) {
    //             result.push(key)
    //         }
    //     }

    //     return Math.min(...result)
    // }

    function migratoryBirds(arr: number[]): number {
        const birdCount: { [key: number]: number } = {};
        
        // Count frequency of each bird type id
        arr.forEach(bird => {
            birdCount[bird] = (birdCount[bird] || 0) + 1;
        });

        console.log(birdCount);
        
        let maxCount = Math.max(...Object.values(birdCount)); // Maximum frequency
        console.log(maxCount);
        let mostFrequentBirds = Object.keys(birdCount).filter(bird => birdCount[+bird] === maxCount);
        console.log(mostFrequentBirds);
        
        let numberArray = mostFrequentBirds.map(Number)

        return Math.min(...numberArray); // Return the smallest bird id among the most frequent ones
    }

    const arr: number[] = [1, 1, 2, 2, 3]
    // const arr: number[] = [1, 4, 4, 4, 5, 3]
    const result: number = migratoryBirds(arr);
    console.log(result);

})()
