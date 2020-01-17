import React from 'react';



// 内部拡張をしていく
// フォームを作成していく
class SearchBar extends React.Component {
    state = { term: ''};

    // eventというメソッドを作成する
    onFormSubmit = event => {
        event.preventDefault();

        console.log(this.state.term);
    }

    


// 初期の動きを無効にしたい
// form部分のもので簡潔に実装することができるようになる
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                            />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;