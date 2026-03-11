"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        // Disable on touch devices
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable element
            const target = e.target as HTMLElement;
            const isClickable = window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('a') !== null ||
                target.closest('button') !== null;
            setIsPointer(isClickable);
        };

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    // Hide if mouse hasn't moved yet
    if (position.x === -100) return null;

    return (
        <div
            className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-150 ease-out flex items-center justify-center ${isPointer
                    ? "w-12 h-12 bg-[#bff549]/20 border border-[#bff549] backdrop-blur-sm"
                    : "w-4 h-4 bg-[#bff549] shadow-[0_0_15px_rgba(191,245,73,0.6)]"
                }`}
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
            }}
        />
    );
}
