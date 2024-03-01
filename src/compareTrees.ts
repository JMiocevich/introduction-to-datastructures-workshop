export function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

    // compare bnary trees
    if (!a && !b) {
        return true
    }

    if (!a || !b) {
        return false
    }

    if (a.value !== b.value) {
        return false
    }

    return compare(a.left, b.left) && compare(a.right, b.right)

}