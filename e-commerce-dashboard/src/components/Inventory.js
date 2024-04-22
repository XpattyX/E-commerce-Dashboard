import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'productName', headerName: 'Product Name', width: 200 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'inStock',headerName: 'Stock',width: 130},
  { field: 'status',headerName: 'Status',width: 130},
];

const rows = [
  { id: 1, productName: 'Tomato', category: 'Fruit', inStock: 30 ,status: 'In Stock' },
  { id: 2, productName: 'Peach', category: 'Fruit', inStock: 10 ,status: 'Low Stock' },
  { id: 3, productName: 'Celery', category: 'Vegetable', inStock: 25 ,status: 'In Stock' },
  { id: 4, productName: 'Cabbage', category: 'Vegetable', inStock: 100 ,status: 'In Stock' },
  { id: 5, productName: 'Lettuce', category: 'Vegetable', inStock: 0 ,status: 'Out of Stock' },
  { id: 6, productName: 'Centella', category: 'Vegetable', inStock: 15 ,status: 'In Stock' },
  { id: 7, productName: 'Perilla leaf', category: 'Vegetable', inStock: 55 ,status: 'In Stock' },
  { id: 8, productName: 'Coconut', category: 'Fruit', inStock: 28 ,status: 'In Stock' },
  { id: 9, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' },
  { id: 10, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' },
  { id: 11, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' },
  { id: 12, productName: 'grape', category: 'Fruit', inStock: 30 ,status: 'In Stock' },
  { id: 13, productName: 'strawberry', category: 'Fruit', inStock: 30 ,status: 'In Stock' },
  { id: 14, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' },
  { id: 15, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' },
  { id: 16, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' },
  { id: 17, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' },
  { id: 18, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' },
  { id: 19, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' },
  { id: 20, productName: 'Tomato', category: 'Vegetable', inStock: 30 ,status: 'In Stock' },

];

function Inventory() {
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
  
  export default Inventory;