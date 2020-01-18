import React from 'react';
// axiosを追加する
import axios from 'axios';
import SearchBar from './ SearchBar';
import unsplash from '../api/unsplash';


// stateで初期値を[]にしておき何もないようにする
class App extends React.Component {
    state = { images: [] };

// 非同期処理をアロー関数を用いて含めてしまう必要がある
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
        params: { query: term },
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