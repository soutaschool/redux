import React from 'react';
import ReactDOM from 'react-dom';

// 簡単なコンポーネント
const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" />
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
        </div>
    )
};


// DOMの操作となり、rootの部分に反映することができるようになる
ReactDOM.render(<App />, document.querySelector('#root'));
