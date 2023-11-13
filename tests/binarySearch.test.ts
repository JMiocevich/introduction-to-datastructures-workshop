import { expect, test } from 'vitest'
import { binarySearch } from '../src/binarySearch';

test('should return true for value inside array', () => {
    const array = [5, 3, 8, 4, 2];
    const value = 8
    const sortedArray = binarySearch(array, value);
    expect(sortedArray).toEqual(true);
});

test('should return false for value not inside array', () => {
    const array = [5, 3, 8, 4, 2];
    const value = 1
    const sortedArray = binarySearch(array, value);
    expect(sortedArray).toEqual(false);
});



