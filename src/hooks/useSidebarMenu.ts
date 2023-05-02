import { stagger, useAnimate } from "framer-motion";
import { useState, useEffect } from "react";

type AnimationSequence = [
    string,
    { [key: string]: string | number },
]

export function useSidebarMenu(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const toggleAnimation = isOpen
            ? [
                [
                    "div",
                    { transform: "translateX(0%)" },
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
                    "li",
                    { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
                    { delay: stagger(0.05, { from: "last" }), at: "<" }
                ],
                [
                    "div", { transform: "translateX(-1000%)" }, { at: "-0.1" }
                ]
            ];

        animate(toggleAnimation as AnimationSequence[]);
    }, [isOpen]);

    return scope;
}