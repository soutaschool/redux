// reactとDOMをインポートする
import React from 'react';
import ReactDOM from 'react-dom';

// componentを作成する

// const App = function() {
// アロー関数の場合の例

// JSXでのcssは{{}}にする
// 記述の仕方の例
    const App = () => {
    return (
        <div>
            <label class="label">Enter name</label>
            <input id = "name" type="text" />
            <button style ={{backgroundColor: 'blue', color: 'white'}}>submit</button>
        </div>
    )
};

// スクリーンに表示する
ReactDOM.render(
  <App />,
  document.querySelector('#root')  
);
// document.querySelectorでhtmlようその取得