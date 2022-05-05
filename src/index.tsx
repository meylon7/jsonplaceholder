import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import 'antd/dist/antd.css';
import Application from './Application'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Application />
);