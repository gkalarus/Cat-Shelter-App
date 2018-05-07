import React from 'react';
import SearchBar from './SearchBar.js';
import CatTable from './CatTable.js'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '',
            likesKids: false
        }
    }

    handleTextChange = event => {
        this.setState({
            filterText: event.target.value,
        })
    };

    handleCheckboxChange = () => {
        this.setState({
            likesKids: !this.state.likesKids
        })
    };

    render() {

        const kitties = this.props.kitties.filter(kitty => {
            let name = kitty.name.toLowerCase();
            let text = this.state.filterText.toLowerCase();
            if(text.length > 0 && name.indexOf(text) === -1) {
                return false;
            }
            return true
        });

        return (
            <div id="shelter">
                <SearchBar onTextChange={this.handleTextChange} onCheckboxChange={this.handleCheckboxChange} filterText={this.state.filterText} likesKids={this.state.likesKids}/>
                <CatTable likesKids={this.state.likesKids} kitties={kitties}/>
            </div>
        )
    }
}

export default App;