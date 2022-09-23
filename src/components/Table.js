import React, { useState } from 'react';

export default function App({columns, data}) {
  const TableRow = ({columns, row}) => {
    console.log(row);
    return (
      <tr>
        { columns.map(colRecord => <td className={colRecord.className}>{row[colRecord.name]}</td> ) }
      </tr>
    
    )
  }

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          { columns.map(colRecord => <th scope="col">{colRecord.displayName}</th> ) }
        </tr>
      </thead>
      <tbody>
          { data.map(record => <TableRow columns={columns} row={record} />) }
        {/* <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </table>
  );
}