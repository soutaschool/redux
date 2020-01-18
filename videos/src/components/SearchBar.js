import React from 'react';


// ここの部分で初期値の設定
class SearchBar extends React.Component {
    state = {term: ''}

    // このようにイベントを利用する
    onInputChange = () => {

    };

    render() {
        return (
            <div className="search-bar ui segment ">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                         type="text"
                         value={this.state.term}
                         onChange={this.onInputChange}
                         />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
