import React from 'react'
import { Bar } from 'react-chartjs-2';
// import { HorizontalBar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const Mychart = () => {
    const chartData = {
        labels: ['Spain', 'English', 'Ducth','French','Rwandeese','Swahili'],
        datasets: [
          {
            label: 'Language level (scale of 10)',
            data: [1, 7.5, 8, 8.5, 9.8, 9.8],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
      
      const chartOptions = {
        indexAxis: 'y', // Use 'y' to specify that the bars should be horizontal
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      };
    
  return <Bar data={chartData} options={chartOptions} />;
}

export default Mychart