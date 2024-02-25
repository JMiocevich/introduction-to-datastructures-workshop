import { expect, test } from 'vitest'
import { tree } from './tree';
import { post_order_search } from 'src/btPostOrder';

test("dfs", () => {
    expect(post_order_search(tree)).toEqual([
        7,
        5,
        15,
        10,
        29,
        45,
        30,
        100,
        50,
        20,
    ]);
});




