"use client"

import styles from "./page.module.css";
import {MutableRefObject, useEffect, useLayoutEffect, useRef} from "react";
import p5 from "p5";
import { setupP5 } from "@/p5/main";

export default function Home() {
    const p5canvasContainer: MutableRefObject<null | HTMLDivElement> = useRef(null)
    let p5Instance: p5 | null = null

    useEffect(() => {
        if (!(p5canvasContainer.current instanceof HTMLDivElement)) return
        if(p5Instance) return
        p5Instance = setupP5(p5canvasContainer.current)
    }, [])

    return (
        <main className={styles.main}>
            <h1>TS + Next + P5js</h1>
            <div ref={p5canvasContainer}/>
        </main>
    );
}
