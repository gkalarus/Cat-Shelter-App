import React from 'react';

class SearchBar extends React.Component{
    render() {
        return (
            <form>
                <div>
                    <label>
                        <input type="text"/>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox"/>
                        Only show cats that like kids
                    </label>
                </div>
            </form>
        )
    }
}

export default SearchBar;