import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// ここをインポートしないと使用することができない
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


// コンポーネントの名前を変えていく
// <></>都することによって今日つの項目にしたかったという意味になる
const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <div>
                <h4>Warning</h4>
                Are you sure you want to do this?
            </div>
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail
            author="sam"
            timeAgo="Today at 4:45PM"
            content="Nice blog post"
            avatar = {faker.image.avatar()}
           />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail 
            author="Alex" 
            timeAgo="Today at 2:00PM" 
            content="I like the subject"
            avatar = {faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail 
            author="Jane" 
            timeAgo="yesterday at 5:45PM" 
            content="I like the writing"
            avatar = {faker.image.avatar()}
        />
        </ApprovalCard>
        </div>
    )
};


// DOMの操作となり、rootの部分に反映することができるようになる
ReactDOM.render(<App />, document.querySelector('#root'));
