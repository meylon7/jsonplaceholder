
// main page using the navigation and router

import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Layout } from 'antd';
import Homepage from './components/homepage';
import LayoutComponent from './components/LayoutComponent';
import PostList from './components/postList';
import TodoList from './components/todoList';
import UserList from './components/userList';
import UseEventListener from './pages/use-event-listener'

export interface IApplicationProps { }
const { Header, Content } = Layout;
const Application: React.FunctionComponent<IApplicationProps> = (props) => {

    return (
        <Fragment>
            <BrowserRouter>
                <Layout className="layout">
                    <Header>
                        <nav>
                            <h1>Frontend project (moshe eylon)</h1>
                            <Link to="/">Home</Link>
                            <Link to="/users">Users</Link>
                            <Link to="/posts">Posts</Link>
                            <Link to="/todo">ToDos</Link>
                        </nav>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
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
                            <Route path="useListener" element={<UseEventListener/>} />
                            <Route path="layout" element={<LayoutComponent />}>
                                <Route index element={<Homepage />} />
                                <Route path=":number" element={<Homepage />} />
                            </Route>
                        </Routes>
                    </Content>
                </Layout>
            </BrowserRouter>
        </Fragment>

    )
}

export default Application