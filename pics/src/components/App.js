import React from 'react';
// axiosを追加する
import axios from 'axios';
import SearchBar from './ SearchBar';


// stateで初期値を[]にしておき何もないようにする
class App extends React.Component {
    state = { images: [] };

// 非同期処理をアロー関数を用いて含めてしまう必要がある
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
            Authorization: 'sasaki souta 32a4479d04cf66b7ab32527b9c932ba9459360b4fa82eb294fa2e8409d0be137'
        }
        });

        console.log(this);
        this.setState({ images: response.data.results });
    }


    render() {
    return (
     <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
     </div>
    );
    }
}

export default App;