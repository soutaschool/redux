// reactとDOMをインポートする
import React from 'react';
import ReactDOM from 'react-dom';

// componentを作成する

// const App = function() {
// アロー関数の場合の例
    const App = () => {
    return <div>Hi there!</div>;
};

// スクリーンに表示する
ReactDOM.render(
  <App />,
  document.querySelector('#root')  
);
// document.querySelectorでhtmlようその取得