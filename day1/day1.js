function splitIntoTwoListsAndOrderThemFromMinToMax(input) {

    let lines = input.split("\n");
    let left = [];
    let right = [];

    lines.map(line => line.split("   "))
        .forEach(line => {left.push(line[0]); right.push(line[1])})


    left = left.sort().map(item => parseInt(item));
    right = right.sort().map(item => parseInt(item));

    return [left, right];
}


function computeDifferenceFromEachLine(input) {

    let result = 0;

    input[0].forEach((value, key) => {


        const input1 = input[0][key];
        const input2 = input[1][key];
        const max = Math.max(input1, input2);
        const min = Math.min(input1, input2);

        result += (max - min);
    })

    return result;
}

function resolveDay1(input) {

    let res = splitIntoTwoListsAndOrderThemFromMinToMax(input);

    res = computeDifferenceFromEachLine(res);

    return res;
}


function calculateSimilarityScore(input) {

    let result = 0;

    input[0].forEach((value0) => {
        const numberOfOccurences = input[1].reduce((accumulator, value1) => value1 === value0 ? accumulator + 1 : accumulator, 0);
        result += value0 * numberOfOccurences;
    })

    return result;
}

function resolveDay1Part2(input) {

    let res = splitIntoTwoListsAndOrderThemFromMinToMax(input);

    res = calculateSimilarityScore(res);

    return res;
}

export { resolveDay1, resolveDay1Part2, splitIntoTwoListsAndOrderThemFromMinToMax, computeDifferenceFromEachLine, calculateSimilarityScore}