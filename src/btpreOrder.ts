
export function pre_order_search(head: BinaryNode<number>): number[] {
    let arr: number[] = []
    walk(head, arr)
    return arr

}

function walk(curr: BinaryNode<number>, arr: number[]): void {

    if (!curr) {
        return
    }

    arr.push(curr.value)
    walk(curr.left, arr)
    walk(curr.right, arr)


}