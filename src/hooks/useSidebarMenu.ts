import { stagger, useAnimate } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { globalCss } from "stitches.config";

type AnimationSequence = [
    string,
    { [key: string]: string | number },
]

type SidebarAnimationProps = {
    isOpen: boolean;
    side?: "left" | "right";
}

export function useSidebarMenu({ isOpen, side = "left" }: SidebarAnimationProps) {
    const [scope, animate] = useAnimate();

    const slideOutBySideSelected = side === "left"
        ? "translateX(-1000%)"
        : "translateX(1000%)";

    const toggleBodyOverflow = useCallback(() => {
        // Overlay Hidden when menu is open
        const getBodyElement = document.querySelector("body") as HTMLElement;
        const bodyOverflow = isOpen ? "hidden" : "auto";

        const toggleOverlayTimeout = setTimeout(() => {
            getBodyElement.style.overflow = bodyOverflow;
        }, 600);

        return toggleOverlayTimeout;
    }, [isOpen]);

    useEffect(() => {
        toggleBodyOverflow();

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
                    "div",
                    { transform: slideOutBySideSelected },
                    { at: "-0.1" }
                ]
            ];

        animate(toggleAnimation as AnimationSequence[]);

        return () => {
            clearTimeout(toggleBodyOverflow());
        };
    }, [isOpen, animate, slideOutBySideSelected, toggleBodyOverflow]);

    return scope;
}