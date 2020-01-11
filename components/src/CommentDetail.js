import React from 'react';
import faker from 'faker';


const CommentDetail = () => {
    return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="data">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog text!</div>
                </div>
            </div>
    )
}

// 他の部分でCommentDetailを使用できるようにする
export default CommentDetail;