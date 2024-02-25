import { expect, test } from 'vitest'
import { tree } from './tree';
import { in_order_search } from 'src/btInOrder';

test("dfs", () => {
    expect(in_order_search(tree)).toEqual([
        5,
        7,
        10,
        15,
        20,
        29,
        30,
        45,
        50,
        100,
    ]);
});




