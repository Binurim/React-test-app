import React, { Component } from 'react';

//simple component
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}

//simple component
const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

//class component
class Table extends Component {
  render() {
    const { characterData, removeCharacter  } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    );
  }
}


export default Table;



//  As you can see, 
//components can be nested in other components, 
//and simple and class components can be mixed.
// A class component must include render(), 
//and the return can only return one parent element.