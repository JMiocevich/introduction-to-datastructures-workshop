
const dir = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1]
]

function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {

    // base cases
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
        return false
    }

    if (maze[curr.y][curr.x] === wall) {
        return false
    }

    if (curr.y === end.y && curr.x === end.x) {
        path.push(end)
        return true
    }

    if (seen[curr.y][curr.x]) {
        return false
    }

    path.push(curr)
    seen[curr.y][curr.x] = true

    // recursive

    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i]
        if (
            walk(maze, wall, {
                x: curr.x + x,
                y: curr.y + y,
            },
                end, seen, path)) {
            return true
        }
    }

    // post recursion

    path.pop()

    return false
}


export function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

    const path: Point[] = []

    const seen = maze.map(row => new Array(row.length).fill(false));


    walk(maze, wall, start, end, seen, path)

    return path


}