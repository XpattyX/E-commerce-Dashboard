import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'Order no.', width: 100 },
  { field: 'date', headerName: 'Date', width: 100 },
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'amount', headerName: 'Amount', width: 70 },
  { field: 'price',headerName: 'Price',width: 90},
];

const rows = [
    { id: 4632, productName: 'Tomato', category: 'Fruit', inStock: 30 ,status: 'In Stock', date:'23/12/2012',amount:1,price:20},
    { id: 2342, productName: 'Peach', category: 'Fruit', inStock: 10 ,status: 'Low Stock', date:'14/12/2012',amount:1,price:100},
    { id: 2352, productName: 'Celery', category: 'Vegetable', inStock: 25 ,status: 'In Stock', date:'16/12/2012',amount:1,price:30},
    { id: 2353, productName: 'Cabbage', category: 'Vegetable', inStock: 100 ,status: 'In Stock' ,date:'09/12/2012',amount:1,price:10},
    { id: 5346, productName: 'Lettuce', category: 'Vegetable', inStock: 0 ,status: 'Out of Stock' ,date:'08/12/2012',amount:1,price:40},
    { id: 2457, productName: 'Centella', category: 'Vegetable', inStock: 15 ,status: 'In Stock', date:'04/12/2012',amount:1,price:50},
    { id: 2514, productName: 'Perilla leaf', category: 'Vegetable', inStock: 55 ,status: 'In Stock' ,date:'02/12/2012',amount:1,price:300},
    { id: 2468, productName: 'Coconut', category: 'Fruit', inStock: 28 ,status: 'In Stock', date:'11/12/2012',amount:1,price:250},
    { id: 4632, productName: 'Tomato', category: 'Fruit', inStock: 30 ,status: 'In Stock', date:'16/12/2012',amount:1,price:20},
    { id: 2342, productName: 'Peach', category: 'Fruit', inStock: 10 ,status: 'Low Stock', date:'14/12/2012',amount:1,price:100},
    { id: 2352, productName: 'Celery', category: 'Vegetable', inStock: 25 ,status: 'In Stock' ,date:'24/12/2012',amount:1,price:30},
    { id: 2353, productName: 'Cabbage', category: 'Vegetable', inStock: 100 ,status: 'In Stock' ,date:'23/12/2012',amount:1,price:10},
    { id: 5346, productName: 'Lettuce', category: 'Vegetable', inStock: 0 ,status: 'Out of Stock' ,date:'27/12/2012',amount:1,price:40},
    { id: 2457, productName: 'Centella', category: 'Vegetable', inStock: 15 ,status: 'In Stock' ,date:'27/12/2012',amount:1,price:50},
    { id: 2514, productName: 'Perilla leaf', category: 'Vegetable', inStock: 55 ,status: 'In Stock', date:'23/12/2012',amount:1,price:300},
    { id: 2468, productName: 'Coconut', category: 'Fruit', inStock: 28 ,status: 'In Stock', date:'23/12/2012',amount:1,price:250},
    { id: 5685, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock', date:'23/12/2012',amount:1,price:20},
    { id: 3568, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' ,date:'23/12/2012',amount:1,price:20},
    { id: 3645, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock', date:'23/12/2012',amount:1,price:20},
    { id: 3463, productName: 'grape', category: 'Fruit', inStock: 30 ,status: 'In Stock' ,date:'23/12/2012',amount:1,price:500},
    { id: 1346, productName: 'strawberry', category: 'Fruit', inStock: 30 ,status: 'In Stock' ,date:'23/12/2012',amount:1,price:340},
    { id: 2352, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' ,date:'23/12/2012',amount:1,price:20},
    { id: 2646, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock',date:'23/12/2012',amount:1,price:20 },
    { id: 6457, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock',date:'23/12/2012' ,amount:1,price:20},
    { id: 1356, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock',date:'23/12/2012' ,amount:1,price:20},
    { id: 1567, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' ,date:'23/12/2012',amount:1,price:20},
    { id: 2456, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock',date:'23/12/2012' ,amount:1,price:20},
    { id: 3466, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' ,date:'23/12/2012',amount:1,price:20},

];

function Salereport() {
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
  
  export default Salereport;