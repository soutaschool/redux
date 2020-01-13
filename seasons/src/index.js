import React from 'react';
import ReactDOM from 'react-dom';


// windowの部分はAPIを使用している
// 現在の位置情報を取得する
// 見えていなくてもコンソールすることによって表示することが可能
const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );


    return <div>Hi herete</div>;
};

ReactDOM.render(
    <App />,document.querySelector("#root")
);