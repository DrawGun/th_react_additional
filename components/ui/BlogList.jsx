import React from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem';

class BlogList extends React.Component {

  render() {
    const posts = this.getPosts();
    return (
      <div>
        { posts }
      </div>
    )
  }

  getPosts() {
    const { posts } = this.props

    return _.map(
      posts,
      (post, key) => (
        <BlogItem
          key={key}
          post={post} />
      )
    )
  }

}

export default BlogList;
