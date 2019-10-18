// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let sortedIntervals = [...intervals];
    sortedIntervals.sort((interval1, interval2) => {
        return interval1[0] - interval2[0];
    })
    console.log('sorted: ' + sortedIntervals);
    let mergedIntervals = [];
    let start = 0, end = 0;

    for(let i = 0; i < sortedIntervals.length - 1; i++) {
        if (sortedIntervals[end][1] >= sortedIntervals[i+1][0]) {
            if (sortedIntervals[i+1][1] > sortedIntervals[end][1]) {
                end = i + 1;
            }
        } else {
            mergedIntervals.push([sortedIntervals[start][0], sortedIntervals[end][1]])
            start = i+1;
            end = i+1;
        }
    }
    mergedIntervals.push([sortedIntervals[start][0], sortedIntervals[end][1]])
    return mergedIntervals;
};

intervals1 = [[2,6],[1,19],[8,10],[15,18]];

const result = merge(intervals1);
console.log('result: ' + result);