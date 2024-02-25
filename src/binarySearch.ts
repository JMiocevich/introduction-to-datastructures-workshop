

export function binarySearch(haystack: number[], needle: number): boolean {


    let lo = 0
    let hi = haystack.length
    while (lo < hi) {

        const m = Math.floor(lo + (hi - lo) / 2)
        const v = haystack[m]

        if (v === needle) {
            return true
        } else if (needle > v) {
            lo = m + 1
        } else {
            hi = m
        }


    }

    return false

}