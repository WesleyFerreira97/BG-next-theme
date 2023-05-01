import { stagger, useAnimate } from "framer-motion";
import { useState, useEffect } from "react";

type AnimationSequence = [
    string,
    { [key: string]: string | number },
]

export function useSidebarMenu(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const myAnimate = isOpen
            ? [
                [
                    "div",
                    { transform: "translateX(100%)" },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
                ],
                [
                    "li",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.05), at: "-0.1" }
                ],
            ]
            : [
                [
                    "div",
                    { transform: "translateX(-0%)" },
                    { ease: [0.16, 1, 0.3, 1], duration: 0.3 }
                ],
                [
                    "li",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.05), at: "-0.1" }
                ]
            ];

        animate(myAnimate as AnimationSequence[]);
    }, [isOpen]);

    return scope;
}