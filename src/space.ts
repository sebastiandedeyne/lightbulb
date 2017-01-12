export interface Point {
    x: number
    y: number
}

export interface Lightbulb extends Point {
    distance: number
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
 * Translate the absolute position of a lightbulb to a position relative to a
 * container.
 */
export const makeLightbulbRelativeToContainer = (container: Container, lightbulb: Lightbulb): Lightbulb =>
    ({
        ...relativePositionInContainer(container, lightbulb), 
        distance: lightbulb.distance
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
export const shadowOffset = (item: Point, lightbulb: Lightbulb): Point => 
    ({
        x: (item.x - lightbulb.x) * lightbulb.distance,
        y: (item.y - lightbulb.y) * lightbulb.distance
    });

/**
 * Calculate the offset of a shadow from it's item in the context of a 
 * container.
 */
export const shadowOffsetInContainer = (container: Container, item: Point, lightbulb: Lightbulb): Point =>
    shadowOffset(
        relativePositionInContainer(container, item),
        makeLightbulbRelativeToContainer(container, lightbulb)
    );