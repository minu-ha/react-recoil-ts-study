import React from 'react';

const Posts = (posts: { map: () => any }, deletePost: any): JSX.Element => {
  return <>{posts.map()}</>;
};

export default Posts;
