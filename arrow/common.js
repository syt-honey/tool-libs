export function mid(a, b) {
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 }
}

export const M = ({ x, y }) => `M${x.toFixed(2)},${y.toFixed(2)}`
export const L = ({ x, y }) => `L${x.toFixed(2)},${y.toFixed(2)}`

export function svg(tag = 'svg') {
    return document.createElementNS('http://www.w3.org/2000/svg', tag)
}

// the distance between the given two points
export function distance(point1, point2) {
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2))
}

// the midpoint coordinates of two points
export function getMid(point1, point2) {
    return {
        x: (point1.x + point2.x) / 2,
        y: (point1.y + point2.y) / 2
    }
}
