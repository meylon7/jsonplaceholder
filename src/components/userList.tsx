import * as React from 'react';
import { useEffect, useState } from 'react';
import { IUser } from '../models/IUser';
import { UserService } from '../services/UserService';
import { Table } from 'antd' 

interface IState {
    loading: boolean;
    users: IUser[];
    errorMessage: string;
}

interface IProps {
}

let UserList: React.FC<IProps> = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
          },
          {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
          },
    ]
    let [state, setState] = useState<IState>({
        loading: false,
        users: [] as IUser[],
        errorMessage: '',
    });

    useEffect(() => {
        setState({ ...state, loading: true });
        UserService.getAllUsers().then().then((response) => {
            setState({
                ...state,
                loading: false,
                users: response.data
            })
            console.log(response.data);
        }).catch((error) => {
            setState({
                ...state,
                loading: false,
                errorMessage: error.message
            })
        })
    }, [])

    let { loading, users, errorMessage } = state;
    return (
        <div>
                <h2>User List</h2>
                <Table dataSource={users} columns={columns} />
        </div>
    );
}
export default UserList