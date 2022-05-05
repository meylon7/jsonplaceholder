import React, { useEffect, useState, useRef } from 'react';

interface Options {
    enabled?: boolean;
    target?: GlobalEventHandlers;
}

export default function useEventListener(
    eventType: keyof GlobalEventHandlersEventMap,
    handler: (e: Event) => void,
    { enabled = true, target = document }: Options = {}
) {
    const handlerRef = useRef(handler);

    useEffect(() => {
        handlerRef.current = handler;
    });

    useEffect(() => {
        if (!enabled) {
            return;
        }
        function internalHandler(e: Event) {
            return handlerRef.current(e);
        }

        target.addEventListener(eventType, internalHandler);

        return () => {
            target.removeEventListener(eventType, internalHandler);
        };
    }, [eventType, enabled, target]);
}
