import { getContainer, getCenter, raf, queryAll, MousePosition, State } from './dom';
import { relativePositionInContainer, shadowOffset, Container, Point } from './space';

interface Settings {
    container: string
    subject: string
    distance: number
    spread: string
    color: string
    inset?: boolean
}

export const lightbulb = ({
    container: containerSelector,
    subject: subjectSelector,
    distance,
    spread, 
    color,
    inset = false,
}: Settings) => {

    queryAll(containerSelector).forEach((container: HTMLElement) => {
        const subjects = <HTMLElement[]> queryAll(subjectSelector, container)

        raf(({ mouse }: State) => {
            subjects.forEach((subject) => {
                const { x, y } = shadowOffsetInContainer(
                    getContainer(container),
                    getCenter(subject),
                    { ...mouse, distance }
                )

                subject.style.boxShadow = `${x}px ${y}px ${spread} ${color} ${inset ? 'inset' : ''}`;
            });
        });
    });
};

const shadowOffsetInContainer = (container: Container, subject: Point, lightbulb: Point & { distance: number }): Point =>
    shadowOffset(
        relativePositionInContainer(container, subject),
        { ...relativePositionInContainer(container, lightbulb), distance: lightbulb.distance }
    );
