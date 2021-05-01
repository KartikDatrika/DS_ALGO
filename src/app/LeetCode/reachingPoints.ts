interface point { x: number, y: number };

// initial code
export function reachingPointsBrute(sx: number, sy: number, tx: number, ty: number): boolean {
    let sp = { x: sx, y: sy };
    let tp = { x: tx, y: ty };
    function canSPreachTP(): boolean {
        let possiblePointsReached = [sp];
        for (let point = 0; point < possiblePointsReached.length; point++) {
            const currentPoint = possiblePointsReached[point];

            let left = { x: currentPoint.x, y: currentPoint.x + currentPoint.y };
            let right = { x: currentPoint.x + currentPoint.y, y: currentPoint.y };

            if ((left.y == tp.y && left.x == tp.x) || (right.y == tp.y && right.x == tp.x)) {
                return true;
            }
            if (left.x < tp.x && left.y < tp.y) {
                possiblePointsReached.push(left);
            }
            if (right.x < tp.x && right.y < tp.y) {
                possiblePointsReached.push(right);
            }

        }
        return false;
    }
    return canSPreachTP();
};


export function reachingPoints(sx: number, sy: number, tx: number, ty: number) {
    let result = false;
    if (tx === ty) {
        return result;
    }
    while (true) {
        if (tx < sx || ty < sy) {
            break;
        }
        if (tx === sx && ty === sy) {
            result = true;
        }
        if (tx > ty) {
            tx = tx - ty;
        }
        else {
            ty = ty - tx;
        }
    }
    return result;
}