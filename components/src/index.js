import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// ここをインポートしないと使用することができない
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
        <CommentDetail />
        </div>
    )
};


// DOMの操作となり、rootの部分に反映することができるようになる
ReactDOM.render(<App />, document.querySelector('#root'));
