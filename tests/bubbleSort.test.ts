// sum.test.js
import { expect, test } from 'vitest'
// bubbleSort.test.ts

import { bubbleSort } from '../src/bubbleSort';

test('should sort an array of numbers', () => {
    const array = [5, 3, 8, 4, 2];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([2, 3, 4, 5, 8]);
});

test('should handle an empty array', () => {
    const array: number[] = [];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([]);
});

test('should handle an array wtesth one element', () => {
    const array = [1];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([1]);
});

test('should not modify the sorted array', () => {
    const array = [1, 2, 3, 4, 5];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
});

