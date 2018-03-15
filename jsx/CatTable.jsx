import React from 'react';
import CategoryRow from './CategoryRow.jsx';
import CatRow from './CatRow.jsx'

class CatTable extends React.Component{
    render() {

        let rows = [];
        let lastCategory = null;
        this.props.kitties.forEach(kitty => {
            if(kitty.category !== lastCategory) {
                rows.push(<CategoryRow category={kitty.category} key={kitty.category}/>)
            }
            rows.push(<CatRow kitty={kitty} key={kitty.name}/>);
            lastCategory = kitty.category;
        });


        console.log(rows);

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