function plusMinus(arr) {
    // Write your code here
    const counters = getCounters(arr);
    let proportionPositives = 0;
    let proportionNegatives = 0;
    let proportionZeros = 0;
    
    if (counters.positives > 0) {
        proportionPositives = getProportion(counters.positives, counters.numbers)
    }
    if (counters.negatives > 0) {
        proportionNegatives = getProportion(counters.negatives, counters.numbers)
    }
    if (counters.zeros > 0) {
        proportionZeros = getProportion(counters.zeros, counters.numbers)
    }
    
    return `${proportionPositives}\n${proportionNegatives}\n${proportionZeros}`
}

function getProportion (numbers, totalNumbers) {
    const proportion = numbers / totalNumbers;
    return proportion.toFixed(6);
}

function getCounters (arr) {
    let counterPositives = 0;
    let counterNegatives = 0;
    let counterZeros = 0;
    
    arr.forEach((number) => {
        if (number > 0) {
            counterPositives += 1
        }
        if (number < 0) {
            counterNegatives += 1
        }
        if (number === 0) {
            counterZeros += 1
        }
    })
    return {
        positives: counterPositives,
        negatives: counterNegatives,
        zeros: counterZeros,
        numbers: arr.length
    }
}
console.log(plusMinus([-4, 3, -9, 4, 1]))