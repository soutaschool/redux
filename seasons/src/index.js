import React from 'react';
import ReactDOM from 'react-dom';




// コンストラクターでメソッドを作っている
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: 40 };
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // ここでsetStateを使用する
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );

        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />,document.querySelector("#root")
);