import { expect, test } from 'vitest'
import { linearSearch } from '../src/linearSearch';

test('should return true for value inside array centre', () => {
    const array = [1, 3, 8, 10, 13];
    const value = 8
    const sortedArray = linearSearch(array, value);
    expect(sortedArray).toEqual(true);
});

test('should return true for value inside array at start of array', () => {
    const array = [1, 5, 6, 9, 10];
    const value = 5
    const sortedArray = linearSearch(array, value);
    expect(sortedArray).toEqual(true);
});

test('should return true for value inside array at end of array', () => {
    const array = [1, 2, 30, 2, 4];
    const value = 2
    const sortedArray = linearSearch(array, value);
    expect(sortedArray).toEqual(true);
});


test('should return false for value not inside array', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 10
    const sortedArray = linearSearch(array, value);
    expect(sortedArray).toEqual(false);
});