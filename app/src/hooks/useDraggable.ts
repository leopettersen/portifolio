import { useRef, useState } from 'react';
import type { PointerEvent } from 'react';

interface DragStart {
    pointerId: number;
    x: number;
    y: number;
    positionX: number;
    positionY: number;
}

export function useDraggable(enabled: boolean) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const dragStart = useRef<DragStart | null>(null);
    const moved = useRef(false);

    function onPointerDown(event: PointerEvent<HTMLElement>) {
        if (!enabled) return;
        if (event.button !== 0) return;

        const target = event.target;
        const button = target instanceof Element ? target.closest('button') : null;
        if (button && button !== event.currentTarget) return;

        dragStart.current = {
            pointerId: event.pointerId,
            x: event.clientX,
            y: event.clientY,
            positionX: position.x,
            positionY: position.y
        };
        moved.current = false;
        event.currentTarget.setPointerCapture(event.pointerId);
    }

    function onPointerMove(event: PointerEvent<HTMLElement>) {
        const start = dragStart.current;
        if (!start || start.pointerId !== event.pointerId) return;

        const dx = event.clientX - start.x;
        const dy = event.clientY - start.y;
        if (Math.hypot(dx, dy) > 4) moved.current = true;

        setPosition({ x: start.positionX + dx, y: start.positionY + dy });
    }

    function onPointerUp() {
        dragStart.current = null;
    }

    function onPointerCancel() {
        dragStart.current = null;
    }

    return {
        position,
        moved,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        onPointerCancel
    };
}
