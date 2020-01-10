import React from 'react';
import ReactDOM from 'react-dom';

// 簡単なコンポーネント
const App = () => {
    return <div>Hi there!</div>
};


// DOMの操作となり、rootの部分に反映することができるようになる
ReactDOM.render(<App />, document.querySelector('#root'));
