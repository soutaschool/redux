import React from 'react';
import ReactDOM from 'react-dom';




// 新しいクラスを作成（メソッドが一つだけ割り当てられている）
// 
class App extends React.Component {
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