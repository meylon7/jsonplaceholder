import { Button, Card, Divider, List } from 'antd';
import React from 'react'
import { usePosts } from '../services/useGetPosts';
import { FetchState } from '../types/types'

type IProps = {}

let PostList: React.FC<IProps> = () => {
  const [posts, fetchState, getPosts] = usePosts();
  const btnOnClick = () => getPosts();
  return (
    <div className="container">
      {fetchState === FetchState.DEFAULT && (
        <>
          <Button onClick={btnOnClick}>Get Posts</Button>
        </>
      )}
      {fetchState === FetchState.LOADING && <p>Loading posts...</p>}
      {fetchState === FetchState.ERROR && (
        <>
          <p>Please try again.</p>
          <Button onClick={btnOnClick}>Get Posts</Button>
        </>
      )}
      {fetchState === FetchState.SUCCESS && (
        <>
          <Divider orientation="left">Posts</Divider>
          <List
            header={<div>list of posts</div>}
            footer={<div>some data</div>}
            grid={{ gutter: 16, column: 4 }}
            bordered
            dataSource={posts}
            renderItem={post => (
              <List.Item>
                <Card title={post.title}>{post.body}</Card>
                
              </List.Item>
            )}
          />

        </>
      )}

    </div>
  );
}
export default PostList