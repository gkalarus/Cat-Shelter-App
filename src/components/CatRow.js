import React from 'react';

class CatRow extends React.Component{
    render() {

        let name = this.props.kitty.likesKids ? this.props.kitty.name : <span style={{color: 'red'}}>{this.props.kitty.name}</span>

        return (
            <tr>
                <td className="nameCell">{name}</td>
                <td className="ageCell">{this.props.kitty.age}</td>
            </tr>
        )
    }
}

export default CatRow;