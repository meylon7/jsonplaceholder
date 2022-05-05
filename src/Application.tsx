
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import LayoutComponent from './components/LayoutComponent';
import PostList from './components/postList';
import TodoList from './components/todoList';
import UserList from './components/userList';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="users">
                    <Route index element={<UserList />} />
                    <Route path=":number" element={<UserList />} />
                </Route>
                <Route path="posts">
                    <Route index element={<PostList />} />
                    <Route path=":number" element={<PostList />} />
                </Route>
                <Route path="todo" element={<TodoList />} />
                <Route path="layout" element={<LayoutComponent />}>
                    <Route index element={<Homepage />} />
                    <Route path=":number" element={<Homepage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Application