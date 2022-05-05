import React, { useState } from 'react';
import useEventListener from '../hooks/useEventListener'

export default function UseEventListener() {
    const [enabled, setEnabled] = useState(true);
    const [count, setCount] = useState(0);

    useEventListener(
        'click',
        () => {
             console.log('I AM GLOBAL', count);
        },
        { enabled }
    );

    useEventListener(
        'scroll',
        () => {
            console.log('I am scrolling');
        },
        { target: window }
    );

    return (
        <div style={{ height: '110vh' }}>
            <h1>useEventListener</h1>
            <button onClick={() => setEnabled((e) => !e)}>
                Enabled: {String(enabled)}
            </button>
            <br />
            <button onClick={() => setCount((c) => c + 1)}>Hello: {count}</button>
        </div>
    );
}