import { Button } from 'antd';
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
        <div className="container" style={{ height: '110vh' }}>
            <h1>useEventListener</h1>
            <Button type="primary" onClick={() => setEnabled((e) => !e)}>
                Enabled: {String(enabled)}
            </Button>
            <br />
            <Button type="primary" onClick={() => setCount((c) => c + 1)}>Hello: {count}</Button>
        </div>
    );
}