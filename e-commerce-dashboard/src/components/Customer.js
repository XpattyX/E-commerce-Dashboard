import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'email',headerName: 'Email',width: 250},
  { field: 'registerDate',headerName: 'Register date',width: 130},
  { field: 'total',headerName: 'Total Order $',width: 100},
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'JonSnow@sessionStorage.com',registerDate:'24/01/1937',total : 2500 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'CerseiLannister@xxxxxx.com',registerDate:'23/08/2003',total : 3000  },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'JaimeLannister@xxxxx.com',registerDate:'04/12/2003',total : 55000  },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'AryaStark@eesccc.com',registerDate:'18/04/2013',total : 66000  },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'DaenerysTargaryen@sadsfsd.com',registerDate:'23/04/1999',total : 15000  },
  { id: 6, lastName: 'Melisandre', firstName: 'Harvey', email: 'HarveyMelisandre@asdrew.com',registerDate:'22/11/1876',total : 4560  },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'FerraraClifford@ukhjfjht.com',registerDate:'07/03/4546',total : 2400  },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'RossiniFrances@guolyhg.com',registerDate:'11/08/2136',total : 2200  },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'HarveyRoxie@dtydgfe.com',registerDate:'19/04/1895',total : 7000  },
  { id: 10, lastName: 'Snow', firstName: 'Jon', email: 'JonSnow@sessionStorage.com',registerDate:'24/01/1937',total : 2500 },
  { id: 11, lastName: 'Lannister', firstName: 'Cersei', email: 'CerseiLannister@xxxxxx.com',registerDate:'23/08/2003',total : 3000  },
  { id: 12, lastName: 'Lannister', firstName: 'Jaime', email: 'JaimeLannister@xxxxx.com',registerDate:'04/12/2003',total : 55000  },
  { id: 13, lastName: 'Stark', firstName: 'Arya', email: 'AryaStark@eesccc.com',registerDate:'18/04/2013',total : 66000  },
  { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', email: 'DaenerysTargaryen@sadsfsd.com',registerDate:'23/04/1999',total : 15000  },
  { id: 15, lastName: 'Melisandre', firstName: 'Harvey', email: 'HarveyMelisandre@asdrew.com',registerDate:'22/11/1876',total : 4560  },
  { id: 16, lastName: 'Clifford', firstName: 'Ferrara', email: 'FerraraClifford@ukhjfjht.com',registerDate:'07/03/4546',total : 2400  },
  { id: 17, lastName: 'Frances', firstName: 'Rossini', email: 'RossiniFrances@guolyhg.com',registerDate:'11/08/2136',total : 2200  },
  { id: 18, lastName: 'Roxie', firstName: 'Harvey', email: 'HarveyRoxie@dtydgfe.com',registerDate:'19/04/1895',total : 7000  },
  { id: 19, lastName: 'Targaryen', firstName: 'Daenerys', email: 'DaenerysTargaryen@sadsfsd.com',registerDate:'23/04/1999',total : 15000  },
  { id: 20, lastName: 'Melisandre', firstName: 'Harvey', email: 'HarveyMelisandre@asdrew.com',registerDate:'22/11/1876',total : 4560  },
];

function Customer() {
    return (
      <div style={{ height: "529px", width: '1000px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    );
  }
  
  export default Customer;