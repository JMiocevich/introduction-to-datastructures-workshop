export function in_order_search(head: BinaryNode<number>): number[] {
    let arr: number[] = []
    walk(head, arr)
    return arr

}

function walk(curr: BinaryNode<number>, arr: number[]): void {

    if (!curr) {
        return
    }

    walk(curr.left, arr)
    console.log(curr.value)
    arr.push(curr.value)
    walk(curr.right, arr)


}