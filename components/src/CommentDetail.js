import React from 'react';

function HelperFunction() {



}

function HelperFunction() {


    
}




// props.authorを使用することによりそれぞれの人の名前を表示している
// propsが関係している
const CommentDetail = props => {
    return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="data">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.content}</div>
                </div>
            </div>
    )
}

// 他の部分でCommentDetailを使用できるようにする
export default CommentDetail;