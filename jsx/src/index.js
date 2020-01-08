// reactとDOMをインポートする
import React from 'react';
import ReactDOM from 'react-dom';

// componentを作成する


// functionで作成する場合は()をつける必要がある
function getButtonText() {
    return 'Click me!!';
}

// const App = function() {
// アロー関数の場合の例

// JSXでのcssは{{}}にする
// 記述の仕方の例
// classの指定はclassNameへ
    const App = () => {
        const buttonText = 'click me!';


    return (
        <div>
            <label class="label">Enter name</label>
            <input id = "name" type="text" />
            <button style ={{backgroundColor: 'blue', color: 'white'}}>
            {getButtonText()}
            </button>
        </div>
    )
};
// {を使用することで作成したものを使用することが可能になる

// スクリーンに表示する
ReactDOM.render(
  <App />,
  document.querySelector('#root')  
);
// document.querySelectorでhtmlようその取得