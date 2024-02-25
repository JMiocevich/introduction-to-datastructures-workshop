import { expect, test } from 'vitest'
import { binarySearch } from '../src/binarySearch';

test('should return true for value inside array offset', () => {
    const array = [1, 3, 8, 10, 13];
    const value = 10
    const sortedArray = binarySearch(array, value);
    expect(sortedArray).toEqual(true);
});

test('should return true for value inside array at some point', () => {
    const array = [1, 5, 6, 9, 10];
    const value = 5
    const sortedArray = binarySearch(array, value);
    expect(sortedArray).toEqual(true);
});

test('should return true for value inside array at start of array', () => {
    const array = [1, 5, 6, 9, 10];
    const value = 1
    const sortedArray = binarySearch(array, value);
    expect(sortedArray).toEqual(true);
});

test('should return true for value inside array at end of array', () => {
    const array = [1, 2, 30, 32, 50];
    const value = 50
    const sortedArray = binarySearch(array, value);
    expect(sortedArray).toEqual(true);
});


test('should return false for value not inside array', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 10
    const sortedArray = binarySearch(array, value);
    expect(sortedArray).toEqual(false);
});



