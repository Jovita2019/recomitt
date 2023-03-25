var xValues = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
var yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
var barColors = [
  'hsl(10, 79%, 65%)',
  'hsl(10, 79%, 65%)',
  'hsl(186, 34%, 60%)',
  'hsl(10, 79%, 65%)',
  'hsl(10, 79%, 65%)',
  'hsl(10, 79%, 65%)',
  'hsl(10, 79%, 65%)'
];



new Chart('myChart', {
  type: 'bar',

  data: {
    labels: xValues,
    fontColor: 'black',
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        borderRadius: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        
        display: true,
        text: 'Spending - Last 7 days',
        color: '--clr-neutral-hsl-100',
        family: 'DM Sans',

        font: {
          size: 28,
          family: 'DM Sans',
          weight: 'bold',
        },
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        display: false,
        grid: {
          display: false,
          ticks: {
            display: false,
          },
        },
      },
    },
  },
});
