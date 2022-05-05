import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export interface IHomePageProps {}

const Homepage: React.FunctionComponent<IHomePageProps> = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <p>This is the home page.</p>
            <p>
                <Link to="/users">Go to the Users Page!</Link>
            </p>
            <p>
                <Link to="/todo">Go to the ToDo List Page!</Link>
            </p>
            <button onClick={() => navigate('/todo/2')}>Go to todo, with a number</button>
        </div>
    );
};

export default Homepage;