import ReactApexChart from 'react-apexcharts';

function PieChart() {

  const data = {
    series: [30, 45, 25],
    chartOptions: {
      labels: ['Paslon 1', 'Paslon 2', 'Paslon 3'],
      plotOptions: {
        pie: {
          customScale: 1
        }
      },
      colors: ['#FF6384', '#FFCD56', '#36A2EB']
    }
  }

  return (
    <div className=''>
      <ReactApexChart options={data.chartOptions} series={data.series} type="pie" width={600} />
    </div>
  )
}

export default PieChart