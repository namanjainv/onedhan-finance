import React, { useState } from 'react';

export default function App({columns, data}) {
  const [searchText, setSearchText] = useState('');
  const [sortColumn, setSortColumn] = useState(0);
  const [sortAscending, setSortAscending] = useState(true);
  const TableRow = ({columns, row}) => {
    return (
      <tr>
        { columns.map(colRecord => <td key={row[colRecord.name]} className={colRecord.className}>{ colRecord.displayFormat ? colRecord.displayFormat(row[colRecord.name]) : row[colRecord.name]}</td> ) }
      </tr>
    
    )
  }

  const filteredData = data.filter(record => {
    let flags = columns.map(colRecord => record[colRecord.name].includes(searchText));
    return flags.includes(true);
  });

  const sortedData = filteredData.sort((a,b) => {
    const targetColumn = columns[sortColumn];
    const aText = a[targetColumn.name];
    const bText = b[targetColumn.name];
    switch(targetColumn.type) {
      case "numeric": {
        if(sortAscending) return aText-bText;
        else              return bText-aText;
      }
      case "text": {
        if(sortAscending) return aText<bText ? -1 : 1;
        else              return aText>bText ? -1 : 1;
      }
      case "date": {
        if(sortAscending) return aText<bText ? -1 : 1;
        else              return aText>bText ? -1 : 1;
      }
    }
  });

  const startSorting = (e, columnIndex) => {
    if( columnIndex === sortColumn ) {
      setSortAscending(!sortAscending)
    }
    else {
      setSortColumn(columnIndex);
      setSortAscending(true);
    }
    e.preventDefault();
  }

  return (
    <div className='Table'>
      <div className="input-group Table-search">
        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="form-control" placeholder="Search (case sensitive)" aria-label="Search"/>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            { columns.map((colRecord, index) => <th onClick={e => startSorting(e, index)} key={index} scope="col">{colRecord.displayName}</th> ) }
          </tr>
        </thead>
        <tbody>
            { sortedData.map(record => <TableRow key={JSON.stringify(record)} columns={columns} row={record} />) }
        </tbody>
      </table>
    </div>
  );
}