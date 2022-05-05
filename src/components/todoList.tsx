import React, { ChangeEvent, FC, useState } from 'react'
import { ITask } from "../interfaces/ITask";
import { Button, Card, Input, Row, Col, Space, Divider, List } from 'antd';
import { useFetchData } from '../hooks/useFetchData';

type IProps = {}
interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
const TodoList: FC = () => {
  const [data, loading] = useFetchData<ITodo[]>('https://jsonplaceholder.typicode.com/todos', [])

  if (loading) return <p>Loading...</p>

  return (
    <div className="main-area">
      <Divider>To Do List</Divider>
      <List
        header={<div>list of Todo's</div>}
        footer={<div>some data</div>}
        grid={{ gutter: 16, column: 4 }}
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>
              id: {item.id}<br />
              completed?: {item.completed ? 'Yes' : 'No'}<br />
              title: {item.title}<br />
              uid: {item.userId}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoList