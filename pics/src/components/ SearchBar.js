import React from 'react';



// 内部拡張をしていく
// フォームを作成していく
class SearchBar extends React.Component {
    state = { term: ''};

    // この場合未定義の状態となっている
    onFormSubmit(event) {
        event.preventDefault();

        console.log(this.state.term);
    }

    


// 初期の動きを無効にしたい
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
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