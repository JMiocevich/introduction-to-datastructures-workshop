import { expect, test } from 'vitest'
import { tree } from './tree';
import { pre_order_search } from 'src/btpreOrder';

test("dfs", () => {
    expect(pre_order_search(tree)).toEqual([
        20,
        10,
        5,
        7,
        15,
        50,
        30,
        29,
        45,
        100,
    ]);
});




