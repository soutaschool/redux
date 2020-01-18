import React from 'react';


// ここの部分で初期値の設定
class SearchBar extends React.Component {
    state = {term: ''}

    // このようにイベントを利用する
    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        // make sure we call callback from 
    };

    render() {
        return (
            <div className="search-bar ui segment ">
                <form onSubmit={this.onFormSubmit} className="ui form">
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
