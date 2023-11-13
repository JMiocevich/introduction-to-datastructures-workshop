import { expect, test } from 'vitest'
import { bubbleSort } from '../src/bubbleSort';

test('should sort an array of numbers', () => {
    const array = [5, 3, 8, 4, 2];
    bubbleSort(array);
    expect(array).toEqual([2, 3, 4, 5, 8]);
});

test('should handle an array with one element', () => {
    const array = [1];
    bubbleSort(array);
    expect(array).toEqual([1]);
});

test('should not modify the sorted array', () => {
    const array = [1, 2, 3, 4, 5];
    bubbleSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5]);
});

