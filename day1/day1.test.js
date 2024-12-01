import {resolveDay1, resolveDay1Part2, splitIntoTwoListsAndOrderThemFromMinToMax, computeDifferenceFromEachLine, calculateSimilarityScore} from "./day1";
import {content} from "../fileLoader.js";


test("should resolve day input test", async () => {

    const text =
        "3   4\n" +
        "4   3\n" +
        "2   5\n" +
        "1   3\n" +
        "3   9\n" +
        "3   3";

    expect(resolveDay1(text)).toBe(11)
})

test("should split into two lists and order them", async () => {

    const text =
        "3   4\n" +
        "4   3\n" +
        "2   5\n" +
        "1   3\n" +
        "3   9\n" +
        "3   3";

    expect(splitIntoTwoListsAndOrderThemFromMinToMax(text)).toStrictEqual([[1,2,3,3,3,4],[3,3,3,4,5,9]]);
})

test("should compute difference from each line", async () => {

    const input = [[1,2,3,3,3,4],[3,3,3,4,5,9]];

    expect(computeDifferenceFromEachLine(input)).toBe(11);
})



test("should resolve day input", async () => {

    const text = await content('./day1/day1input.txt')

    expect(resolveDay1(text)).toBe(1830467)
})

test("should resolve day input test", async () => {

    const text =
        "3   4\n" +
        "4   3\n" +
        "2   5\n" +
        "1   3\n" +
        "3   9\n" +
        "3   3";

    expect(resolveDay1Part2(text)).toBe(31)
});



test("should calculate similarity score from each line", async () => {

    const input = [[1,2,3,3,3,4],[3,3,3,4,5,9]];

    expect(calculateSimilarityScore(input)).toBe(31);
});


test("should resolve day input part 2", async () => {

    const text = await content('./day1/day1input.txt')

    expect(resolveDay1Part2(text)).toBe(26674158)
})