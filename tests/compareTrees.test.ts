import { expect, test } from 'vitest'
import { tree, tree2 } from "./tree";
import { compare } from 'src/compareTrees';

test("Compare Binary Trees", function () {
    expect(compare(tree, tree)).toEqual(true);
    expect(compare(tree, tree2)).toEqual(false);
});





