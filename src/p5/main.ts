import p5 from 'p5'
import {sketch} from "./sketch";

export const setupP5: (canvasParentRef: HTMLDivElement) => p5 =
    (canvasParentRef) => new p5(sketch, canvasParentRef)

