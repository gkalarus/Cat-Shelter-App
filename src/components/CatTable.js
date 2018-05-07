import React from 'react';
import CategoryRow from './CategoryRow.js';
import CatRow from './CatRow.js'

class CatTable extends React.Component{

    render() {

        let rows = [];
        let lastCategory = null;
        if(!this.props.likesKids){
            this.props.kitties.forEach(kitty => {
                if(kitty.category !== lastCategory) {
                    rows.push(<CategoryRow category={kitty.category} key={kitty.category}/>)
                }
                rows.push(<CatRow kitty={kitty} key={kitty.name}/>);
                lastCategory = kitty.category;
            });
        }else {
            this.props.kitties.forEach(kitty => {
                if(kitty.category !== lastCategory) {
                    rows.push(<CategoryRow category={kitty.category} key={kitty.category}/>)
                }
                rows.push(<CatRow kitty={kitty} key={kitty.name}/>);
                lastCategory = kitty.category;
                if(!kitty.likesKids){
                    rows.pop()
                }
            })
        }

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

export default CatTable;