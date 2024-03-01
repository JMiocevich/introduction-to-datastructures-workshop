
export function post_order_search(head: BinaryNode<number>): number[] {
    let arr: number[] = []
    walk(head, arr)
    return arr

}

function walk(curr: BinaryNode<number>, arr: number[]): void {

    if (!curr) {
        return
    }

    walk(curr.left, arr)
    walk(curr.right, arr)
    arr.push(curr.value)


}