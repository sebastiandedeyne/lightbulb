import { getContainer, getCenter, raf, queryAll, MousePosition, State } from './dom';
import {
    shadowOffsetInContainer,
    Container,
    Point,
    Lightbulb
} from './space';

interface Settings {
    container: string
    item: string
    spread: number
    color: string
    inset?: boolean
}

interface IlluminateSettings extends Settings {
    lightbulb: Lightbulb
}

interface FloatSettings extends Settings {
    lightbulb: {
        distance: number
    }
}

export const illuminate = ({
    container: containerSelector,
    item: itemSelector,
    lightbulb,
    spread, 
    color,
    inset = false
}: IlluminateSettings) => {

    queryAll(containerSelector).forEach((container: HTMLElement) => {
        (<HTMLElement[]> queryAll(itemSelector, container)).forEach((item) => {
            applyBoxShadow({ container, item, lightbulb, spread, color, inset });
        });
    });
};

export const float = ({
    container: containerSelector,
    item: itemSelector,
    lightbulb: { distance },
    spread, 
    color,
    inset = false
}: FloatSettings) => {

    queryAll(containerSelector).forEach((container: HTMLElement) => {

        const items = <HTMLElement[]> queryAll(itemSelector, container);

        raf(({ mouse }: State) => {
            const lightbulb = { ...mouse, distance };
            items.forEach((item) => {
                applyBoxShadow({ container,  item,  lightbulb, spread, color, inset });
            });
        });
    });
};

const applyBoxShadow = ({ container, item, lightbulb, spread, color, inset }: {
    container: HTMLElement, 
    item: HTMLElement, 
    lightbulb: Lightbulb,
    spread: number,
    color: string,
    inset: boolean
}) => {
    const { x, y } = shadowOffsetInContainer(
        getContainer(container),
        getCenter(item),
        lightbulb
    );

    item.style.boxShadow = `${x}px ${y}px ${spread}px ${color} ${inset ? 'inset' : ''}`;
}