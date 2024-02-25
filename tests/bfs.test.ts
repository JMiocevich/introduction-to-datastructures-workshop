import { expect, test } from 'vitest'

import { tree } from './tree';
import { bfs } from 'src/bfs';

test("bt bfs", () => {
    expect(bfs(tree, 45)).toEqual(true);
    expect(bfs(tree, 7)).toEqual(true);
    expect(bfs(tree, 69)).toEqual(false);
});




