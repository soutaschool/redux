import React from 'react';
import ReactDOM from 'react-dom';




// 新しいクラスを作成（メソッドが一つだけ割り当てられている）
// constructorとsuperはセットで覚えるのが吉
// 新しいインスタンスを作成する
// latは短縮するのに使用している
// 状態のオブジェクトを初期化
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null };
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );

        return <div>Latitude: </div>;
    }
}

ReactDOM.render(
    <App />,document.querySelector("#root")
);