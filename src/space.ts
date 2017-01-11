export interface Point {
    x: number
    y: number
}

export interface Container {
    width: number
    height: number
    left: number
    top: number
}

/**
 * Determine the relative position of a point in a container. Returns `{ x, y }` 
 * coordinates, each being relative to the container on an axis.
 */
export const relativePositionInContainer = (c: Container, m: Point): Point => 
    ({
        x: relativePositionOnSegment({ start: c.left, end: c.left + c.width }, m.x),
        y: relativePositionOnSegment({ start: c.top, end: c.top + c.height }, m.y)
    });

/**
 * Determine the relative position of a point on a segment. An segment has a 
 * start and end point on an axis.
 */
export const relativePositionOnSegment = (segment: { start: number, end: number }, position: number): number =>
    // If the point is located before the axis, it's position is 0
    //     ---*--______----
    position < segment.start ? 0 :
        // If the point is located after the axis, it's position is 1
        //     -----____----*--
        position > segment.end ? 1 :
            // If the point is located on the axis, it's position is between 0 and 1
            //     -----___*___-----
            (position - segment.start) / (segment.end - segment.start);

/**
 * Calculate the offset of a shadow from it's item.
 */
export const shadowOffset = (item: Point, flame: Point & { distance: number }): Point => 
    ({
        x: (item.x - flame.x) * flame.distance,
        y: (item.y - flame.y) * flame.distance
    });
