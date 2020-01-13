import React from 'react';



// 内部拡張をしていく
// フォームを作成していく
class SearchBar extends React.Component {
    onInputChange(event) {
        console.log(event.target.value);
    }

    



    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text"  onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;