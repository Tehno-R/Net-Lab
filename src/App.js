import './CSS/App.css';
import buildings from './data.js';
import Table from './components/Table.js';
import Rate from './components/Rate.js';
import { useState } from 'react';

function App() {

  const [tableData, setTableData] = useState(buildings)

  return (
    <div className='App'>
      <h3>Самые высокие здания и сооружения</h3>
      <Rate data={tableData}/>
      <Table data={buildings} amountRows="10" showPagination={false} globalRefreshingData={setTableData} />
    </div>
  );
}

export default App;