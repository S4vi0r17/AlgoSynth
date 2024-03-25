/*
    Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

    Example
    `scores = [12, 24, 10, 24]`

    Scores are in the same order as the games played. She tabulates her results as follows:

                                         Count
        Game  Score  Minimum  Maximum   Min Max
        0      12     12       12       0   0
        1      24     12       24       0   1
        2      10     10       24       1   1
        3      24     10       24       1   1

    Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.
*/

; (() => {
    function breakingRecords(scores: number[]): number[] {

        let highestCounter: number = 0
        let lowestCounter: number = 0

        let h: number = scores[0]
        let l: number = scores[0]

        for (let i = 1; i < scores.length; i++) {
            if (scores[i] > h) {
                h = scores[i]
                highestCounter++
            }
            if (scores[i] < l) {
                l = scores[i]
                lowestCounter++
            }
        }

        return [highestCounter, lowestCounter]
    }



    const scores: number[] = [10, 5, 20, 20, 4, 5, 2, 25, 1]
    const result: number[] = breakingRecords(scores);
    console.log(result);
})()
