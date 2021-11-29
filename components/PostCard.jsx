import React from 'react'

const PostCard = ({ post }) => {
    return (
        <div>
            {post.title}
            {post.excerp}
        </div>
    )
}

export default PostCard
