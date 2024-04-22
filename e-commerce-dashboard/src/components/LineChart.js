import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
    return (
      <>
      <h3>Monthly Sales Report</h3>
      <LineChart
        xAxis={[{ 
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] }]}
        series={[
          {
            data: [30, 40, 50, 50, 55, 50,40,60,45,65,75,65,55,50,65,60,65,45,40,55, 50,40,60,45,65,75,80,90,65,45],
          },
        ]}
        width={1000}
        height={350}
      />
      </>
    );
  }