import React from 'react';

class SearchBar extends React.Component{

    render() {

        return (
            <form>
                <div>
                    <label>
                        <input onChange={this.props.onTextChange} value={this.props.filterText} type="text" placeholder="Search..."/>
                    </label>
                </div>
                <div>
                    <label>
                        <input onChange={this.props.onCheckboxChange} checked={this.props.likesKids} type="checkbox"/>
                        Only show cats that like kids
                    </label>
                </div>
            </form>
        )
    }
}

export default SearchBar;