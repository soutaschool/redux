import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// ここをインポートしないと使用することができない
import CommentDetail from './CommentDetail';


// コンポーネントの名前を変えていく
const App = () => {
    return (
        <div className="ui container comments">
        <CommentDetail author="sam" timeAgo="Today at 4:45PM"/>
        <CommentDetail author="Alex" timeAgo="Today at 2:00PM"/>
        <CommentDetail author="Jane" timeAgo="yesterday at 5:45PM"/>
        </div>
    )
};


// DOMの操作となり、rootの部分に反映することができるようになる
ReactDOM.render(<App />, document.querySelector('#root'));
