"use client";

import { useRef, useState, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";

interface DragCarouselProps {
    children: React.ReactNode;
    className?: string;
}

export default function DragCarousel({ children, className = "" }: DragCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [hasDragged, setHasDragged] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const onPointerDown = (e: ReactMouseEvent<HTMLDivElement> | ReactTouchEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setHasDragged(false);
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        setStartX(pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const onPointerMove = (e: ReactMouseEvent<HTMLDivElement> | ReactTouchEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollRef.current) return;
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX;
        const x = pageX - (scrollRef.current.offsetLeft || 0);
        const walk = (x - startX) * 2; // Scroll multiplier
        if (Math.abs(x - startX) > 5) {
            setHasDragged(true);
        }
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const onPointerUpOrLeave = () => {
        setIsDragging(false);
    };

    const onClickCapture = (e: ReactMouseEvent) => {
        if (hasDragged) {
            e.stopPropagation();
            e.preventDefault();
        }
    };

    return (
        <div
            ref={scrollRef}
            className={`flex overflow-x-auto pb-12 pt-4 hide-scrollbar select-none snap-mandatory ${isDragging ? "cursor-grabbing snap-none" : "cursor-grab snap-x"
                } ${className} items-stretch`}
            onMouseDown={onPointerDown}
            onMouseLeave={onPointerUpOrLeave}
            onMouseUp={onPointerUpOrLeave}
            onMouseMove={onPointerMove}
            onTouchStart={onPointerDown}
            onTouchEnd={onPointerUpOrLeave}
            onTouchCancel={onPointerUpOrLeave}
            onTouchMove={onPointerMove}
            onClickCapture={onClickCapture}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
            {children}
        </div>
    );
}
