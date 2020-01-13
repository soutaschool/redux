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
        
    }

    // 最初のスクリーンに作画される時に自動的に呼び出される
    componentDidMount() {
        console.log('My component was rederred tothe screen');
    }

    componentDidUpdate() {
        console.log('My component was just updated - it re');
    }


        // メッセージを表示することに必要なのは{}
        render() {
            if (this.state.errorMessage && !this.state.lat) {
                return <div>Error: {this.state.errorMessage}</div>
            }

            if (!this.state.errorMessage && this.state.lat) {
                return <div>Latitude: {this.state.lat}</div>
            }

            return <div>Loading:</div>;
    }
}

ReactDOM.render(
    <App />,document.querySelector("#root")
);