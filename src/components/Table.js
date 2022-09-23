import React, { useState } from 'react';
import { MDBDatatable } from 'mdb-react-ui-kit';

export default function App({columns, data}) {
  const TableRow = ({columns, row}) => {
    console.log(row);
    return (
      <tr>
        { columns.map(colName => <td>{row[colName]}</td> ) }
      </tr>
    
    )
  }

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          { columns.map(colName => <th scope="col">{colName}</th> ) }
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