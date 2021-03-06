// home page allow navigate to custom hooks

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Rating from '../components/rate'
import { Button, Card } from 'antd';

export interface IHomePageProps { }

const Homepage: React.FunctionComponent<IHomePageProps> = (props) => {
  const [state, setState] = useLocalStorage('Storage',7);
  const navigate = useNavigate();

  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Custom Hooks" bordered={false} style={{ width: 300 }}>
        <p>Value: {state}<br />
          <Button onClick={() => setState(Math.floor(Math.random() * 10000))}>
            Storage state!
          </Button>
        </p>
        <p><Link to="/useListener">useListener hook</Link></p>
        <p><Link to="/todo">Go to the ToDo List Page!</Link></p>
        <p><button onClick={() => navigate('/todo/2')}>Go to todo, with a number</button></p>
        <Rating />
      </Card>
    </div>
  );
};

export default Homepage;