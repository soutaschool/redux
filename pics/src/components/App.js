import React from 'react';
// axiosを追加する
import axios from 'axios';
import SearchBar from './ SearchBar';


// Appを継承に変更
// ここの中にAPIを記入していく
// asynchじゃ非同期処理を表すもの
class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
            Authorization: 'sasaki 32a4479d04cf66b7ab32527b9c932ba9459360b4fa82eb294fa2e8409d0be137'
        }
        });

        console.log(response.data.results);
    }


    render() {
    return (
     <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
     </div>
    );
    }
}

export default App;