import React from 'react';
import ReactDOM from 'react-dom';




// 問題があればエラーメッセージを表示する
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // ここでsetStateを使用する
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );

        return (<div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
        </div>
        );

        
    }
}

ReactDOM.render(
    <App />,document.querySelector("#root")
);