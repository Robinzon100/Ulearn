const objectValueSum = (rattingObject: any): number => {
    const sum: number = Object.values(rattingObject)
        .reduce((a, b) => +a + +b, 0) as number
    return sum
}



export const geteveryRattingValuePercentages = (rattingObject): any[] => {
    const sum = objectValueSum(rattingObject)
    const allRatings = [...Object.values(rattingObject)]

    return allRatings.map((amount, i) =>
        allRatings[i] = ~~((+amount / sum) * 100)
    )
}

