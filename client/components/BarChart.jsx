import Chart from "react-apexcharts";
import React, { useState, useEffect } from "react";

export default function BarChart(props) {
    console.log('THIS IS SCORE DATA', props);
    const scoreData = props.state.map(el => el[1]);
    console.log('SCORE DATA', scoreData);
    const nameData = props.state.map(el => el[0])
  const [barData, setBarData] = useState({
    
           series: [
        {
          data: scoreData
        },
      ],
      options: {
        chart: {
          animations: {
            easing: 'easeinout',
            speed: 500,
            animatedGradually: {
                enabled:true,
                delay: 150
            }
          },
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: nameData,
        },
      },
    });

    const [series, setSeries] = useState([1]);


    useEffect(() => {
      setSeries([{data: scoreData}]);
      console.log('DATA', scoreData);
    }, [props])

    

  return (
    <div id="chart">
      <Chart options={barData.options} series={series} type="bar" width={400} height={350} />
    </div>
  )
}
