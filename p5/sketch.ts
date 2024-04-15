import p5 from "p5";
import type p5Type from "p5";

export const sketch: (p: p5) => void = (p: p5Type) => {

    let x = 50
    let y = 50

    const canvasX = 500
    const canvasY = 500

    p.setup = () => {
        p.createCanvas(canvasX, canvasY)
    }

    p.draw = () => {
        p.background(0)
        p.ellipse(x, y, 70, 70)

        if (x !== canvasX - 50 && y === 50) {
            x++
        }

        if (x === canvasX - 50 && y !== canvasY - 50) {
            y++
        }

        if (y === canvasY - 50 && x !== 50) {
            x--
        }

        if (y !== 50 && x === 50) {
            y--
        }
    }

}
