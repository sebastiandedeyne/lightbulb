import { getContainer, getCenter, raf, queryAll, MousePosition, State } from './dom';
import { relativePositionInContainer, shadowOffset, Container, Point } from './space';

interface Settings {
    container: string
    item: string
    distance: number
    spread: string
    color: string
    inset?: boolean
}

export const lightbulb = ({
    container: containerSelector,
    item: itemSelector,
    distance,
    spread, 
    color,
    inset = false,
}: Settings) => {

    queryAll(containerSelector).forEach((container: HTMLElement) => {
        const items = <HTMLElement[]> queryAll(itemSelector, container)

        raf(({ mouse }: State) => {
            items.forEach((item) => {
                const { x, y } = shadowOffsetInContainer(
                    getContainer(container),
                    getCenter(item),
                    { ...mouse, distance }
                )

                item.style.boxShadow = `${x}px ${y}px ${spread} ${color} ${inset ? 'inset' : ''}`;
            });
        });
    });
};

const shadowOffsetInContainer = (container: Container, item: Point, lightbulb: Point & { distance: number }): Point =>
    shadowOffset(
        relativePositionInContainer(container, item),
        { ...relativePositionInContainer(container, lightbulb), distance: lightbulb.distance }
    );
